from django.test import TestCase,Client
from django.contrib.auth.models import User

# Create your tests here.

class AccountTestCase(TestCase):
    def setUp(self):
        self.client = Client(HTTP_HOST='localhost:8000')
    
    def test_signup(self):
        credentials = {
            'username':"testusername",
            'password':"$@124Tyoa",
            'email':"username123@gmail.com"
        }
        response = self.client.post('/api/auth/signup/',credentials,follow=True)
        self.assertEqual(response.status_code, 201)

    def test_login(self):
        credentials = {
            'username':"testusername",
            'password':"$@124Tyoa",
            'email':"username123@gmail.com"
        }
        User.objects.create_user(**credentials)
        response = self.client.post('/api/auth/login/',credentials,follow=True)
        print(response.content)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response,"auth_token")
        self.assertContains(response,"created")
    
