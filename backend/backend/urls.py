"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from core.views import form
from core.views import form_login
from core.views import upload_art
from core.views import get_artist_art
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path("form/", form, name="form"),
    path("form_login/",form_login,name="form_login"),
    path("upload_art/", upload_art, name="upload_art"),
    path("get_artist_art/<user>/", get_artist_art, name="get_artist_art")
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
