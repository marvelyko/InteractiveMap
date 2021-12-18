# Generated by Django 4.0 on 2021-12-18 16:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Point',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('latitude', models.DecimalField(decimal_places=17, max_digits=20)),
                ('longtitude', models.DecimalField(decimal_places=17, max_digits=20)),
                ('comment', models.TextField()),
                ('phone', models.TextField()),
                ('name', models.TextField()),
            ],
        ),
    ]