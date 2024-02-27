from django.db import models
from cloudinary_storage.storage import MediaCloudinaryStorage
from backend.utils.date_time import get_current_datetime

STATUS_CHOICES = [
    (True, 'True'),
    (False, 'False'),
]

# Model for Course


class Course(models.Model):
    course_name = models.CharField(max_length=100)
    course_code = models.CharField(max_length=10)
    course_description = models.TextField()
    course_credit = models.IntegerField()
    course_status = models.BooleanField(choices=STATUS_CHOICES, default=True)
    course_application_link = models.URLField(max_length=200, blank=True)
    course_image = models.ImageField(
        upload_to='MNFAPAC_PROJECT/courses/', blank=True, storage=MediaCloudinaryStorage())
    created_at = models.DateTimeField(default=get_current_datetime)
    updated_at = models.DateTimeField(default=get_current_datetime)

    class Meta:
        ordering = ('created_at',)
        verbose_name = "Course"
        verbose_name_plural = "Courses"

    def __str__(self):
        return self.course_name

    def save(self, *args, **kwargs):
        if self.pk:
            old_image = Course.objects.get(pk=self.pk).course_image
            if old_image != self.course_image:
                old_image.delete(save=False)
        super().save(*args, **kwargs)
