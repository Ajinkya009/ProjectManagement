# Generated by Django 3.0.5 on 2020-04-22 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('taskManager', '0002_auto_20200422_1328'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='startDate',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='task',
            name='startDate',
            field=models.DateField(),
        ),
    ]
