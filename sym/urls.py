from rest_framework.routers import DefaultRouter
from .views import UserviewSet
from django.urls import path, include

router = DefaultRouter()
router.register('user', UserviewSet)

urlpatterns = [
    path('api/', include(router.urls))
]
