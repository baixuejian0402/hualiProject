SET NAMES UTF8;
DROP DATABASE IF EXISTS xh;
CREATE  DATABASE huali CHARSET=UTF8;
USE huali;

/**1.用户信息列表**/
CREATE TABLE huali_user{
  uid INT PRIMARY KEY AUTO-INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),

  avatar VARCHAR(128),       #头像图片路径
  user_name VARCHAR(16),
  gender BOOLEAN             #性别  0-女  1-男
};

/**2.首页轮播广告商品表**/
CREATE TABLE huali_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  src VARCHAR(128),
  title VARCHAR(64),
);

/**3.商品导购表**/
CREATE TABLE huali_pro_shopping_guide(
  gid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64)
);

/**4.商品导购分类关联表**/
CREATE TABLE huali_pro_classify(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  img VARCHAR(128),
  guide_id INT
);

/**5.首页商品栏目表**/
CREATE TABLE huali_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128),
  title VARCHAR(64),
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq_recommended TINYINT,
  seq_new_arrival TINYINT,
  seq_top_sale TINYINT
);

/**6.鲜花表--记载所有商品的信息**/
CREATE TABLE huali_flower(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128),            #主标题
  subtitle VARCHAR(128),         #副标题

  family_id INT,                 #鲜花种类编号
  materials VARCHAR(64),         #材料
  package VARCHAR(32),           #包装
  flower_language VARCHAR(128),  #花语
  dispatching VARCHAR(32),       #配送
  spec VARCHAR(64),              #规格/颜色
  price DECIMAL(10,2),           #价格

  shelf_time BIGINT,             #上架时间
  sold_count INT,                #已售出的数量
  is_onsale BOOLEAN              #是否促销中
);

/**7.鲜花详情图表--记载商品的缩放图中的素材路径**/
CREATE TABLE huali_flower_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  flower_id INT,              #鲜花编号
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128),            #中图片路径
  lg VARCHAR(128)             #大图片路径
);

/**8.购物车表 **/
CREATE TABLE huali_shopping_cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,        #用户编号
  product_id INT,     #商品编号
  buy_count INT,      #购买数量
  is_checked BOOLEAN   #是否已勾选，确定购买
);

/**9.订单表**/
CREATE TABLE huali_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  buy_count INT,          #购买数量
);

/**10.导航条目**/
CREATE TABLE huali_navbar(
  nid INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32),
  title VARCHAR(32)
);



