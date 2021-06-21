# parcialBertaniLPabla
Creación de Tablas

sequelize model:generate --name Brand --attributes name:string

sequelize model:generate --name Color --attributes name:string

sequelize model:generate --name Payment --attributes type:string

sequelize model:generate --name Category --attributes name:string

sequelize model:generate --name Gender --attributes type:string

sequelize model:generate --name Size --attributes name:string

sequelize model:generate --name Address --attributes street:String,number:integer,location:string,cp:integer

sequelize model:generate --name State --attributes description:string

sequelize model:generate --name Shipping --attributes type:string,date:date

sequelize model:generate --name User --attributes first_name:string,last_name:string,username:string,email:string,password:string,address_id:integer

sequelize model:generate --name Product --attributes name:string,price:decimal,stock:integer,stock_min:integer,stock_max:integer,brand_id:integer,category_id:integer,size_id:integer,gender_id:integer

sequelize model:generate --name Image --attributes name:string,url:string,product_id:integer

sequelize model:generate --name ColorProduct --attributes color:string,productId:integer,colorId:integer

sequelize model:generate --name Order --attributes number:integer,date:date,user_id:integer,payment_id:integer,shipping_id:integer,states_id:integer

sequelize model:generate --name OrderDetail --attributes quantity:decimal,subtotal:decimal,order_id:integer,product_id:integer


Creación De Relaciones 

.ADDRESS
      Address.hasOne(models.User, {
        foreignKey: 'address_id',
        as: "user"
        })
    
.BRAND
       Brand.hasMany(models.Product, {
        foreignKey: 'brand_id',
        as: "products"
      })
    
.CATEGORY
 	Category.hasMany(models.Product, {
        foreignKey:'category_id' ,
        as: 'products'
      })

.COLOR
	static associate(models) {
      Category.hasMany(models.Product, {
        foreignKey:'category_id' ,
        as: 'products'
     })

.GENDER
	 Gender.hasMany(models.Product, {
        foreignKey: 'gender_id',
        as: "products"
        })

.IMAGE
	 Image.belongsTo(models.Product);

.ORDER

  Order.hasMany(models.OrderDetail, {
        foreignKey: 'order_id',
        as: "orderDetails"
      })

      Order.hasOne(models.Shippings, {
        foreignKey: 'shipping_id',
        as: "shippings"
      })

      Order.belongTo(models.User);

      Order.belongTo(models.Payment);

      Order.belongTo(models.State);

      Order.belongTo(models.Address);
    }

.ORDERDETAIL
	OrderDetail.belongsTo(models.Products);


.PAYMENT
	 Payment.hasOne(models.Order, {
        foreignKey: 'payment_id',
        as: 'orders',
      })


.PRODUCT
     Product.hasOne(models.OrderDetail, {
        foreignKey: 'product_id',
        as: "orderdetails"
      });

      Product.belongsTo(models.Brand);

      Product.belongsTo(models.Category);

      Product.belongsTo(models.Size);

      Product.belongsTo(models.Gender);

      Product.hasMany(models.Image, {
        foreignKey: 'product_id',
        as: "images"
      })
.SHIPPING
	Shippings.belongsTo(models.Order);


.SIZE
	 Size.hasMany(models.Product, {
        foreignKey: 'size_id',
        as: "products"
        })


.STATE
	 State.hasOne(models.Order, {
        foreignKey: 'state_id',
        as: "orders"
        })


.USER 
	User.hasMany(models.Order,{
        foreignKey:'user_id',
        as: 'orders'
      })
      User.belongsTo(models.Address)
  
    }
