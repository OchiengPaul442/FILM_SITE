from django.contrib import admin
from django.utils.html import format_html
from django.template.defaultfilters import truncatechars
from .models import *

# Register your models here.


class CourseAdmin(admin.ModelAdmin):
    list_display = ('course_name', 'course_code', 'short_description', 'course_credit',
                    'course_status', 'course_application_link', 'image_preview', 'created_at', 'updated_at')

    def short_description(self, obj):
        return truncatechars(obj.course_description, 20)
    short_description.short_description = 'Course Description'

    def image_preview(self, obj):
        if obj.course_image:
            return format_html('<img src="{}" width="50" height="50" />', obj.course_image.url)
        else:
            return '(No image)'
    image_preview.short_description = 'Image Preview'


admin.site.register(Course, CourseAdmin)
