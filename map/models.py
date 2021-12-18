from django.db import models

# Create your models here.
class Point(models.Model):
    latitude = models.DecimalField(max_digits=20,decimal_places=17)
    longtitude = models.DecimalField(max_digits=20,decimal_places=17)
    comment = models.TextField(blank=False)
    phone = models.TextField(blank=False)
    name = models.TextField(blank=False)