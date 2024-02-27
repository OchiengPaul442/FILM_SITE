from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="MNFAPAC API",
        default_version='v1',
        description="API documentation",
    ),
    public=True,
    permission_classes=(permissions.IsAuthenticated,),
)

api_urlpatterns = [
    path('', include('backend.courses.urls')),
    # Add more paths here
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(api_urlpatterns)),
    re_path(r'^.*', include('app.urls')),
    path('docs/', schema_view.with_ui('swagger',
         cache_timeout=0), name='schema-swagger-ui'),
]
