# Generated by Django 5.0.6 on 2024-06-29 10:53

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('phone_number', models.CharField(blank=True, max_length=15, null=True)),
                ('full_name', models.CharField(blank=True, max_length=100, null=True)),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('is_active', models.BooleanField(default=True)),
                ('is_superuser', models.BooleanField(default=False)),
                ('is_staff', models.BooleanField(default=False)),
                ('name', models.CharField(blank=True, max_length=40, null=True)),
                ('address', models.CharField(blank=True, max_length=500, null=True)),
                ('city', models.CharField(blank=True, max_length=60, null=True)),
                ('state', models.CharField(blank=True, max_length=60, null=True)),
                ('pincode', models.CharField(blank=True, max_length=6, null=True)),
                ('reset_password_token', models.CharField(blank=True, max_length=255, null=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(blank=True, max_length=500, null=True)),
                ('city', models.CharField(max_length=60)),
                ('state', models.CharField(max_length=60)),
                ('pincode', models.CharField(max_length=6)),
                ('default', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_address', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]