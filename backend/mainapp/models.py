from django.db import models
from accounts.models import CustomUser 

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=200)
    sku_no = models.PositiveBigIntegerField(unique=True)
    image1 = models.ImageField(upload_to='product_images/')
    image2 = models.ImageField(upload_to='product_images/')
    image3 = models.ImageField(upload_to='product_images/')
    image4 = models.ImageField(upload_to='product_images/')
    description = models.CharField(max_length=500)
    exclusive = models.BooleanField(default=False)
    available = models.BooleanField(default=True)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    discounted_price = models.DecimalField(max_digits=10,decimal_places=2)
    category = models.ForeignKey("Category",on_delete=models.CASCADE,related_name='categories')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Cart(models.Model):
    user = models.ForeignKey("Customeuser",on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    product = models.ForeignKey("Product", on_delete=models.CASCADE)
    quantity = models.PositiveBigIntegerField(default=1)

ORDER_STATUS = (
    ('Pending','Pending'),
    ('Accepted','Accepted'),
    ('Dispatch','Dispatch'),
    ('Deliverd','Deliverd'),
)

PAYMENT_STATUS = (
    ('Pending','Pending'),
    ('Succeeded','Succeeded'),
    ('Failed','Failed'),
)

PAYMENT_METHOD = (
    ('COD','COD'),
    ('Online','Online'),
)

class Order(models.Model):
    user  = models.ForeignKey("Customeuser", on_delete=models.CASCADE)
    oreder_no = models.PositiveIntegerField()
    customer_name = models.CharField(max_length=50)
    adddress  = models.CharField(max_length=500)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=50)
    pincode = models.CharField(max_length=15)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    products = models.ManyToManyField(Product,through='OrderItem')
    sub_total = models.DecimalField(max_digits=10,decimal_places=2)
    gst = models.DecimalField(max_digits=10,decimal_places=2)
    shipping_charges = models.DecimalField(max_digits=10,decimal_places=2)
    total_amount = models.DecimalField(max_digits=10,decimal_places=2)
    order_status = models.CharField(choices=ORDER_STATUS, max_length=20)
    payment_status = models.CharField(choices=PAYMENT_STATUS , max_length=20)
    payment_method = models.CharField(choices=PAYMENT_METHOD,max_length=20)
    transcation_id = models.CharField(max_length=100)
    invoice = models.FieldFile(upload_to='invoices')

class OrderItem(models.Model):
    order = models.ForeignKey(Order,on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity  = models.PositiveBigIntegerField(default=1)

class Wishlist(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    product  = models.ForeignKey(Product, on_delete=models.CASCADE)
