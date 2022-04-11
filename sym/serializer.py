from rest_framework.serializers import ModelSerializer
from .models import NewUser

class UserSerializer(ModelSerializer):
    class Meta:
        model = NewUser
        fields = '__all__'