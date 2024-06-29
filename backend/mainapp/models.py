from django.db import models
from accounts.models import CustomUser 


class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.name)
    
class Product(models.Model):
    name = models.CharField(max_length=200)
    sku_no = models.PositiveBigIntegerField(unique=True)
    image1 = models.ImageField(upload_to='product_images/')
    image2 = models.ImageField(upload_to='product_images/',blank=True,null=True)
    image3 = models.ImageField(upload_to='product_images/',blank=True,null=True)
    image4 = models.ImageField(upload_to='product_images/',blank=True,null=True)
    description = models.CharField(max_length=500)
    exclusive = models.BooleanField(default=False)
    quantity = models.PositiveBigIntegerField(default=50)
    available = models.BooleanField(default=True)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    discounted_price = models.DecimalField(max_digits=10,decimal_places=2)
    category = models.ForeignKey(Category,on_delete=models.CASCADE,related_name='categories')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) :
        return str(self.id)

class Cart(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveBigIntegerField(default=1)

    def __str__(self):
        return str(self.id)
    

ORDER_STATUS = (
    ('Processing','Processing'),
    ('Accepted','Accepted'),
    ('Packed','Packed'),
    ('Dispatched','Dispatched'),
    ('Out for Delivery','Out for Delivery'),
    ('Deliverd','Deliverd'),
)

PAYMENT_STATUS = (
    ('Pending','Pending'),
    ('Success','Success'),
    ('Failed','Failed'),
)

PAYMENT_METHOD = (
    ('COD','COD'),
    ('Online','Online'),
)

class Order(models.Model):
    user  = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    order_number = models.CharField(max_length=50, blank=True, null=True)
    customer_name = models.CharField(max_length=50)
    adddress  = models.CharField(max_length=500)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=50)
    pincode = models.CharField(max_length=15)
    email = models.EmailField(null=True,blank=True)
    phone = models.CharField(max_length=15,null=True,blank=True)
    products = models.ManyToManyField(Product,through='OrderItem')
    sub_total = models.DecimalField(max_digits=10,decimal_places=2)
    start_date = models.DateField(null=True,blank=True)
    end_date = models.DateField(null=True,blank=True)
    gst = models.DecimalField(max_digits=10,decimal_places=2)
    shipping_charges = models.DecimalField(max_digits=10,decimal_places=2)
    total_amount = models.DecimalField(max_digits=10,decimal_places=2)
    order_status = models.CharField(choices=ORDER_STATUS, max_length=20,default="Processing")
    payment_status = models.CharField(choices=PAYMENT_STATUS , max_length=20,default="Pending")
    payment_method = models.CharField(choices=PAYMENT_METHOD,max_length=20,default="COD")
    transcation_id = models.CharField(max_length=100,null=True, blank=True)
    invoice = models.FileField(upload_to='invoices')

    def __str__(self):
        return str(self.id)
    

class OrderItem(models.Model):
    order = models.ForeignKey(Order,on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity  = models.PositiveBigIntegerField(default=1)

    def __str__(self):
        return str(self.id)
    

class Wishlist(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    product  = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)
    
