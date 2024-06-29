# Generated by Django 5.0.6 on 2024-06-29 12:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0003_alter_cart_end_date_alter_cart_start_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cart',
            name='end_date',
        ),
        migrations.RemoveField(
            model_name='cart',
            name='start_date',
        ),
        migrations.RemoveField(
            model_name='order',
            name='oreder_no',
        ),
        migrations.AddField(
            model_name='order',
            name='end_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='order_number',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='start_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='order_status',
            field=models.CharField(choices=[('Processing', 'Processing'), ('Accepted', 'Accepted'), ('Packed', 'Packed'), ('Dispatched', 'Dispatched'), ('Out for Delivery', 'Out for Delivery'), ('Deliverd', 'Deliverd')], default='Processing', max_length=20),
        ),
        migrations.AlterField(
            model_name='order',
            name='payment_method',
            field=models.CharField(choices=[('COD', 'COD'), ('Online', 'Online')], default='COD', max_length=20),
        ),
        migrations.AlterField(
            model_name='order',
            name='payment_status',
            field=models.CharField(choices=[('Pending', 'Pending'), ('Success', 'Success'), ('Failed', 'Failed')], default='Pending', max_length=20),
        ),
        migrations.AlterField(
            model_name='order',
            name='phone',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='transcation_id',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
