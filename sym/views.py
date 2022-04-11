from rest_framework.viewsets import ModelViewSet
from .models import NewUser
from .serializer import UserSerializer

class UserviewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = NewUser.objects.all()

