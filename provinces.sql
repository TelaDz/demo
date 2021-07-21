DROP TABLE IF EXISTS `provinces`;
CREATE TABLE `provinces` (
  `id` int(11) NOT NULL auto_increment,
  `code` varchar(20) NOT NULL,
  `parent_code` varchar(50) NOT NULL,
  `area` varchar(20) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COMMENT='省份信息表';


insert into provinces(id,code,area,parent_code) values(1,'110000','北京市','0');
insert into provinces(id,code,area,parent_code) values(2,'120000','天津市','0');
insert into provinces(id,code,area,parent_code) values(3,'130000','河北省','0');
insert into provinces(id,code,area,parent_code) values(4,'140000','山西省','0');
insert into provinces(id,code,area,parent_code) values(5,'150000','内蒙古自治区','0');
insert into provinces(id,code,area,parent_code) values(6,'210000','辽宁省','0');
insert into provinces(id,code,area,parent_code) values(7,'220000','吉林省','0');
insert into provinces(id,code,area,parent_code) values(8,'230000','黑龙江省','0');
insert into provinces(id,code,area,parent_code) values(9,'310000','上海市','0');
insert into provinces(id,code,area,parent_code) values(10,'320000','江苏省','0');
insert into provinces(id,code,area,parent_code) values(11,'330000','浙江省','0');
insert into provinces(id,code,area,parent_code) values(12,'340000','安徽省','0');
insert into provinces(id,code,area,parent_code) values(13,'350000','福建省','0');
insert into provinces(id,code,area,parent_code) values(14,'360000','江西省','0');
insert into provinces(id,code,area,parent_code) values(15,'370000','山东省','0');
insert into provinces(id,code,area,parent_code) values(16,'410000','河南省','0');
insert into provinces(id,code,area,parent_code) values(17,'420000','湖北省','0');
insert into provinces(id,code,area,parent_code) values(18,'430000','湖南省','0');
insert into provinces(id,code,area,parent_code) values(19,'440000','广东省','0');
insert into provinces(id,code,area,parent_code) values(20,'450000','广西壮族自治区','0');
insert into provinces(id,code,area,parent_code) values(21,'460000','海南省','0');
insert into provinces(id,code,area,parent_code) values(22,'500000','重庆市','0');
insert into provinces(id,code,area,parent_code) values(23,'510000','四川省','0');
insert into provinces(id,code,area,parent_code) values(24,'520000','贵州省','0');
insert into provinces(id,code,area,parent_code) values(25,'530000','云南省','0');
insert into provinces(id,code,area,parent_code) values(26,'540000','西藏自治区','0');
insert into provinces(id,code,area,parent_code) values(27,'610000','陕西省','0');
insert into provinces(id,code,area,parent_code) values(28,'620000','甘肃省','0');
insert into provinces(id,code,area,parent_code) values(29,'630000','青海省','0');
insert into provinces(id,code,area,parent_code) values(30,'640000','宁夏回族自治区','0');
insert into provinces(id,code,area,parent_code) values(31,'650000','新疆维吾尔自治区','0');
insert into provinces(id,code,area,parent_code) values(32,'710000','台湾省','0');
insert into provinces(id,code,area,parent_code) values(33,'810000','香港特别行政区','0');
insert into provinces(id,code,area,parent_code) values(34,'820000','澳门特别行政区','0');