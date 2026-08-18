import os
import requests
import pytest

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://afif-multimedia.preview.emergentagent.com').rstrip('/')

# Load frontend .env to get the real backend URL
try:
    with open('/app/frontend/.env') as f:
        for line in f:
            if line.startswith('REACT_APP_BACKEND_URL='):
                BASE_URL = line.split('=', 1)[1].strip().rstrip('/')
except Exception:
    pass


@pytest.fixture
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(api):
    r = api.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert r.json().get("message") == "Hello World"


def test_contact_post_and_persistence(api):
    payload = {
        "name": "TEST_User",
        "email": "test_user@example.com",
        "message": "Hello from pytest",
    }
    r = api.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["message"] == payload["message"]
    assert "id" in data and isinstance(data["id"], str)
    assert "created_at" in data

    # GET list
    r2 = api.get(f"{BASE_URL}/api/contact")
    assert r2.status_code == 200
    msgs = r2.json()
    assert any(m["id"] == data["id"] for m in msgs)


def test_contact_invalid_email(api):
    r = api.post(f"{BASE_URL}/api/contact", json={
        "name": "TEST_Bad",
        "email": "not-an-email",
        "message": "hi",
    })
    assert r.status_code == 422


def test_contact_missing_fields(api):
    r = api.post(f"{BASE_URL}/api/contact", json={"name": "", "email": "", "message": ""})
    assert r.status_code == 422


def test_resume_pdf_served(api):
    r = api.get(f"{BASE_URL}/resume-muhammad-afif.pdf", allow_redirects=True)
    assert r.status_code == 200, f"Resume file not served: {r.status_code}"
    ctype = r.headers.get("content-type", "")
    # Accept application/pdf or octet-stream
    assert "pdf" in ctype.lower() or "octet-stream" in ctype.lower() or len(r.content) > 100
