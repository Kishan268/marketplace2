-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2021 at 05:34 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `marketplace_trading`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `brand_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`brand_id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Opp', '2021-07-16 20:52:35', '2021-07-16 20:52:35'),
(2, 'Men', '2021-07-16 20:52:51', '2021-07-16 20:52:51');

-- --------------------------------------------------------

--
-- Table structure for table `buy_trade_lead`
--

CREATE TABLE `buy_trade_lead` (
  `buy_trd_id` int(11) NOT NULL,
  `user_id` int(10) NOT NULL,
  `product` varchar(150) DEFAULT NULL,
  `quantity` tinyint(4) DEFAULT NULL,
  `price_range` double(9,2) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `detls` text DEFAULT NULL,
  `keywords` text DEFAULT NULL,
  `valid_for` smallint(2) DEFAULT NULL,
  `catg_id` int(10) DEFAULT NULL,
  `status` varchar(1) NOT NULL DEFAULT 'P',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `buy_trade_lead`
--

INSERT INTO `buy_trade_lead` (`buy_trd_id`, `user_id`, `product`, `quantity`, `price_range`, `picture`, `detls`, `keywords`, `valid_for`, `catg_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 4, 'test', 23, 20.00, '4/image/1618162032_identity.jpg', 'asdasd', 'asdasdasd', 30, 35, 'P', '2021-04-11 11:57:12', '2021-04-11 11:57:25', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `pro_id` varchar(11) DEFAULT NULL,
  `user_id` varchar(11) DEFAULT NULL,
  `price` varchar(11) DEFAULT NULL,
  `total_price` varchar(10) DEFAULT NULL,
  `qty` varchar(4) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `pro_id`, `user_id`, `price`, `total_price`, `qty`, `name`, `image_path`, `created_at`, `updated_at`) VALUES
(3, '8', '1', '500', '7650', '16', 'HP EliteBook Folio 9480m i5 4310U 2.0Ghz 8GB 120GB SSD 14\"HD USB 3.0 W10', 'http://localhost:8000/storage/1/Product_images/1626793670_1510399071.jpg', '2021-07-20 09:39:19', '2021-07-21 02:57:22');

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

CREATE TABLE `cart_items` (
  `cart_item_id` int(11) NOT NULL,
  `price` varchar(20) DEFAULT NULL,
  `qty` varchar(10) DEFAULT NULL,
  `cart_id` int(11) DEFAULT NULL,
  `pro_id` varchar(15) DEFAULT NULL,
  `coupon` varchar(50) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `discount` varchar(3) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart_items`
--

INSERT INTO `cart_items` (`cart_item_id`, `price`, `qty`, `cart_id`, `pro_id`, `coupon`, `name`, `discount`, `image_path`, `created_at`, `updated_at`) VALUES
(14, '500', '1', 3, NULL, NULL, 'HP EliteBook Folio 9480m i5 4310U 2.0Ghz 8GB 120GB SSD 14\"HD USB 3.0 W10', NULL, NULL, '2021-07-20 09:39:19', '2021-07-20 09:39:19'),
(15, '500', '1', 3, NULL, NULL, 'Renault Triber RXZ, 2019, Petrol', NULL, NULL, '2021-07-20 09:39:48', '2021-07-20 09:39:48'),
(16, '500', '1', 3, NULL, NULL, 'Renault Triber RXZ, 2019, Petrol', NULL, NULL, '2021-07-20 09:41:30', '2021-07-20 09:41:30'),
(17, '500', '1', 3, NULL, NULL, 'Renault Triber RXZ, 2019, Petrol', NULL, NULL, '2021-07-20 09:43:17', '2021-07-20 09:43:17'),
(18, '500', '1', 3, '4', NULL, 'Renault Triber RXZ, 2019, Petrol', NULL, NULL, '2021-07-20 09:44:55', '2021-07-20 09:44:55'),
(19, '500', '1', 3, '8', NULL, 'HP EliteBook Folio 9480m i5 4310U 2.0Ghz 8GB 120GB SSD 14\"HD USB 3.0 W10', NULL, NULL, '2021-07-20 09:45:10', '2021-07-20 09:45:10'),
(20, '500', '1', 3, '8', NULL, 'HP EliteBook Folio 9480m i5 4310U 2.0Ghz 8GB 120GB SSD 14\"HD USB 3.0 W10', NULL, 'http://localhost:8000/storage/1/Product_images/1626793670_1510399071.jpg', '2021-07-20 09:51:04', '2021-07-20 09:51:04'),
(21, '500', '1', 3, '8', NULL, 'HP EliteBook Folio 9480m i5 4310U 2.0Ghz 8GB 120GB SSD 14\"HD USB 3.0 W10', NULL, 'http://localhost:8000/storage/1/Product_images/1626793670_1510399071.jpg', '2021-07-21 00:37:49', '2021-07-21 00:37:49'),
(22, '500', '1', 3, '8', NULL, 'HP EliteBook Folio 9480m i5 4310U 2.0Ghz 8GB 120GB SSD 14\"HD USB 3.0 W10', NULL, 'http://localhost:8000/storage/1/Product_images/1626793670_1510399071.jpg', '2021-07-21 00:47:26', '2021-07-21 00:47:26'),
(23, '500', '1', 3, '8', NULL, 'HP EliteBook Folio 9480m i5 4310U 2.0Ghz 8GB 120GB SSD 14\"HD USB 3.0 W10', NULL, 'http://localhost:8000/storage/1/Product_images/1626793670_1510399071.jpg', '2021-07-21 00:48:25', '2021-07-21 00:48:25'),
(24, '500', '1', 3, '4', NULL, 'Renault Triber RXZ, 2019, Petrol', NULL, 'http://localhost:8000/storage/1/Product_images/1626489361_image.jpg', '2021-07-21 00:49:03', '2021-07-21 00:49:03'),
(25, '500', '1', 3, '8', NULL, 'HP EliteBook Folio 9480m i5 4310U 2.0Ghz 8GB 120GB SSD 14\"HD USB 3.0 W10', NULL, 'http://localhost:8000/storage/1/Product_images/1626793670_1510399071.jpg', '2021-07-21 01:33:28', '2021-07-21 01:33:28'),
(26, '375', '1', 3, '8', NULL, 'HP EliteBook Folio 9480m i5 4310U 2.0Ghz 8GB 120GB SSD 14\"HD USB 3.0 W10', NULL, 'http://localhost:8000/storage/1/Product_images/1626793670_1510399071.jpg', '2021-07-21 02:09:11', '2021-07-21 02:09:11'),
(27, '450', '1', 3, '4', NULL, 'Renault Triber RXZ, 2019, Petrol', NULL, 'http://localhost:8000/storage/1/Product_images/1626489361_image.jpg', '2021-07-21 02:12:55', '2021-07-21 02:12:55'),
(28, '450', '1', 3, '4', NULL, 'Renault Triber RXZ, 2019, Petrol', NULL, 'http://localhost:8000/storage/1/Product_images/1626489361_image.jpg', '2021-07-21 02:28:30', '2021-07-21 02:28:30'),
(29, '375', '1', 3, '8', NULL, 'HP EliteBook Folio 9480m i5 4310U 2.0Ghz 8GB 120GB SSD 14\"HD USB 3.0 W10', NULL, 'http://localhost:8000/storage/1/Product_images/1626793670_1510399071.jpg', '2021-07-21 02:57:22', '2021-07-21 02:57:22');

-- --------------------------------------------------------

--
-- Table structure for table `catg_mast`
--

CREATE TABLE `catg_mast` (
  `catg_id` int(10) NOT NULL,
  `catg_type` varchar(2) DEFAULT NULL,
  `parent_id` int(10) DEFAULT NULL,
  `catg_name` varchar(255) DEFAULT NULL,
  `catg_img` varchar(255) DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_desc` varchar(255) DEFAULT NULL,
  `meta_keywords` varchar(250) DEFAULT NULL,
  `status` varchar(1) NOT NULL DEFAULT 'A',
  `level` smallint(1) NOT NULL,
  `shrt_name` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `catg_mast`
--

INSERT INTO `catg_mast` (`catg_id`, `catg_type`, `parent_id`, `catg_name`, `catg_img`, `meta_title`, `meta_desc`, `meta_keywords`, `status`, `level`, `shrt_name`) VALUES
(1, 'ST', NULL, ' Building & Construction', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(2, 'ST', NULL, ' Dyes & Chemicals', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(3, 'ST', NULL, ' Electronics & Electrical', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(4, 'ST', NULL, ' Food & Beverages', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(5, 'ST', NULL, ' Gems & Jewelry', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(6, 'ST', NULL, ' Hand & Machine Tools', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(7, 'ST', NULL, ' Home & Garden', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(8, 'ST', NULL, ' Home Textiles & Furnishings', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(9, 'ST', NULL, ' Metals & Minerals', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(10, 'ST', NULL, ' Office & School', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(11, 'ST', NULL, ' Supplies Paper & Paper', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(12, 'ST', NULL, ' Products Plant & Machinery', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(13, 'ST', NULL, ' Plastic & Plastic Products', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(14, 'ST', NULL, ' Printing & Publishing', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(15, 'ST', NULL, ' Railway, Shipping & Aviation', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(16, 'ST', NULL, ' Rubber & Rubber', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(17, 'ST', NULL, ' Products Scientific', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(18, 'ST', NULL, ' Instrument & Supplies', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(19, 'ST', NULL, ' Sell Tread Lead Add Cat In Buyer Ac', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(20, 'ST', NULL, ' Sporting Goods, Toys & Games', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(21, 'ST', NULL, ' Textile, Yarn & Fabrics', NULL, NULL, NULL, NULL, 'A', 0, NULL),
(27, 'SP', NULL, 'Main Category', '/categories/1618055380_slider.jpg', 'Main Category asd', 'Main Categoryasd', 'Main Categoryasd', 'A', 1, NULL),
(28, 'SP', NULL, 'Security Service', '/categories/1618049322_identity.jpg', 'Security Service', 'Security Service', 'Security Service', 'A', 1, NULL),
(29, 'SP', NULL, 'Consumer Electronics', '/categories/1618049409_identity.jpg', 'Consumer Electronics', 'Consumer Electronics', 'Consumer Electronics', 'A', 1, NULL),
(30, 'SP', NULL, 'Textile Yarn Fabrics', '/categories/1618049532_no_image.jpg', 'Textile Yarn Fabrics', 'Textile Yarn Fabrics', 'Textile Yarn Fabrics', 'A', 1, NULL),
(31, 'SP', 27, 'Sub Main Category', '/categories/1618056085_no_image.jpg', 'Sub Main Category', 'Sub Main Category', 'Sub Main Category', 'A', 2, NULL),
(32, 'SP', 31, 'ART', '/categories/1618066020_sunil-jadhav-aurangabad-1170x650.jpg', 'sdsdsds', 'sfsdf', 'sfdfsdf', 'A', 3, NULL),
(35, 'BT', NULL, 'Arts & Crafts', NULL, 'Arts & Crafts', 'Arts & Crafts', 'Arts & Crafts', 'A', 1, NULL),
(36, 'BT', NULL, 'Building & Construction', NULL, 'Building & Construction', 'Building & Construction', 'Building & Construction', 'A', 1, NULL),
(37, 'BT', NULL, 'Buy Tread Lead For Buyer Ac', NULL, 'Buy Tread Lead For Buyer Ac', 'Buy Tread Lead For Buyer Ac', 'Buy Tread Lead For Buyer Ac', 'A', 1, NULL),
(38, 'BT', NULL, 'Choper', NULL, 'Choper', 'Choper', 'Choper', 'A', 1, NULL),
(39, 'BT', NULL, 'Dyes & Chemicals', NULL, 'Dyes & Chemicals', 'Dyes & Chemicals', 'Dyes & Chemicals', 'A', 1, NULL),
(40, 'BT', NULL, 'Electronics & Electrical', NULL, 'Electronics & Electrical', 'Electronics & Electrical', 'Electronics & Electrical', 'A', 1, NULL),
(41, 'BT', NULL, 'Food & Beverages', NULL, 'Food & Beverages', 'Food & Beverages', 'Food & Beverages', 'A', 1, NULL),
(42, 'BT', NULL, 'Gems & Jewelry', NULL, 'Gems & Jewelry', 'Gems & Jewelry', 'Gems & Jewelry', 'A', 1, NULL),
(43, 'BT', NULL, 'Hand & Machine Tools', NULL, 'Hand & Machine Tools', 'Hand & Machine Tools', 'Hand & Machine Tools', 'A', 1, NULL),
(44, 'BT', NULL, 'Home & Garden', NULL, 'Home & Garden', 'Home & Garden', 'Home & Garden', 'A', 1, NULL),
(45, 'CC', NULL, 'Pets', NULL, 'Pets', 'Pets', 'Pets', 'A', 1, NULL),
(46, 'CC', 45, 'Cat', NULL, 'Cat', 'Cat', 'Cat', 'A', 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `doc_id` int(11) NOT NULL,
  `doc_name` varchar(255) DEFAULT NULL,
  `doc_path` varchar(255) DEFAULT NULL,
  `doc_size` mediumint(8) DEFAULT NULL,
  `doc_mime` varchar(10) DEFAULT NULL,
  `doc_type` varchar(50) DEFAULT NULL,
  `product_id` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`doc_id`, `doc_name`, `doc_path`, `doc_size`, `doc_mime`, `doc_type`, `product_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(5, '1618146730_identity.jpg', '4/images/1618146730_identity.jpg', 34580, 'image/jpeg', 'image_gallery', NULL, '2021-04-11 07:42:10', '2021-04-11 07:42:10', NULL),
(6, '1618146858_no_image.jpg', '4/images/1618146858_no_image.jpg', 10962, 'image/jpeg', 'image_gallery', NULL, '2021-04-11 07:44:18', '2021-04-11 07:44:18', NULL),
(7, '1618146862_advocate.jpg', '4/images/1618146862_advocate.jpg', 133604, 'image/jpeg', 'image_gallery', NULL, '2021-04-11 07:44:22', '2021-04-11 07:44:22', NULL),
(8, '1618146865_signup.jpg', '4/images/1618146865_signup.jpg', 154134, 'image/jpeg', 'image_gallery', NULL, '2021-04-11 07:44:25', '2021-04-11 07:44:25', NULL),
(9, '1626489361_image.jpg', '1/Product_images/1626489361_image.jpg', 75331, 'image/jpeg', 'product', '4', NULL, NULL, NULL),
(10, '1626489361_image (1).jpg', '1/Product_images/1626489361_image (1).jpg', 85026, 'image/jpeg', 'product', '4', NULL, NULL, NULL),
(12, '1626489361_Jellyfish.jpg', '1/Product_images/1626489361_Jellyfish.jpg', 775702, 'image/jpeg', NULL, '6', NULL, NULL, NULL),
(13, '1626489361_Jellyfish.jpg', '1/Product_images/1626489361_Jellyfish.jpg', 775702, 'image/jpeg', NULL, '6', NULL, NULL, NULL),
(14, '1626587765_Jellyfish.jpg', '1/Product_images/1626587765_Jellyfish.jpg', 775702, 'image/jpeg', 'product', '7', NULL, NULL, NULL),
(15, '1626587765_Hydrangeas.jpg', '1/Product_images/1626587765_Hydrangeas.jpg', 595284, 'image/jpeg', 'product', '7', NULL, NULL, NULL),
(16, '1626793670_1510399071.jpg', '1/Product_images/1626793670_1510399071.jpg', 20714, 'image/jpeg', 'product', '8', NULL, NULL, NULL),
(17, '1626793671_1510399041.jpg', '1/Product_images/1626793671_1510399041.jpg', 43769, 'image/jpeg', 'product', '8', NULL, NULL, NULL),
(18, '1626793671_1510399030.jpg', '1/Product_images/1626793671_1510399030.jpg', 24199, 'image/jpeg', 'product', '8', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2021_07_01_065210_laratrust_setup_tables', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `cart_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `order_date` datetime DEFAULT NULL,
  `shipped_date` datetime DEFAULT NULL,
  `order_status` varchar(2) NOT NULL DEFAULT 'P',
  `payment_method` varchar(50) DEFAULT NULL,
  `total_qty` varchar(2) DEFAULT NULL,
  `total_price` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `cart_id`, `customer_id`, `order_date`, `shipped_date`, `order_status`, `payment_method`, `total_qty`, `total_price`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL, NULL, NULL, 'P', NULL, NULL, NULL, '2021-07-20 10:33:20', '2021-07-20 10:33:20'),
(2, 8, NULL, NULL, NULL, 'P', NULL, NULL, NULL, '2021-07-20 10:38:05', '2021-07-20 10:38:05');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `page_id` int(10) NOT NULL,
  `page_type` enum('1','2') NOT NULL DEFAULT '1',
  `parent_id` int(10) DEFAULT NULL,
  `page_name` varchar(200) NOT NULL,
  `page_url` varchar(100) DEFAULT NULL,
  `page_order` int(10) DEFAULT NULL,
  `meta_title` varchar(200) DEFAULT NULL,
  `meta_desc` varchar(255) DEFAULT NULL,
  `meta_keywords` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`page_id`, `page_type`, `parent_id`, `page_name`, `page_url`, `page_order`, `meta_title`, `meta_desc`, `meta_keywords`) VALUES
(1, '1', NULL, 'Home', NULL, NULL, NULL, NULL, NULL),
(2, '1', NULL, 'About', NULL, NULL, NULL, NULL, NULL),
(3, '2', NULL, 'Home', '/', 1, 'Home', 'Home', 'Home'),
(4, '2', NULL, 'Company Profile', 'company_profile', 2, 'Company Profile', 'Company Profile', 'Company Profile'),
(5, '2', NULL, 'Product List', 'product_list', 3, 'Product List', 'Product List', 'Product List'),
(6, '2', NULL, 'Classified', 'classified', 4, 'Classified', 'Classified', 'Classified'),
(7, '2', NULL, 'Seller Feedback', 'seller_feedback', 5, 'Seller Feedback', 'Seller Feedback', 'Seller Feedback'),
(8, '2', NULL, 'Contact', 'contact', 6, 'Contact', 'Contact', 'Contact');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_method`
--

CREATE TABLE `payment_method` (
  `pay_md_id` tinyint(2) NOT NULL,
  `pay_name` varchar(150) DEFAULT NULL,
  `shrt_name` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment_method`
--

INSERT INTO `payment_method` (`pay_md_id`, `pay_name`, `shrt_name`) VALUES
(3, 'Credit Card', 'CC'),
(5, 'Documents against Payments', 'D/P'),
(4, 'Escrow', 'escrow'),
(2, 'Letter of Credit', 'L/C'),
(1, 'Telegraphic transfer', 'T/T');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permission_role`
--

CREATE TABLE `permission_role` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permission_user`
--

CREATE TABLE `permission_user` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'my-app-token', '58052c8d4970368339a9b61dfd12894d2d9a3ba15813a8bc9a1c13eff31ece8b', '[\"*\"]', NULL, '2021-07-16 20:24:00', '2021-07-16 20:24:00'),
(2, 'App\\Models\\User', 1, 'my-app-token', 'd05a358e37c371c5d018e74f00e3464f941cc50ec4d69ddd127c164ef44f9043', '[\"*\"]', NULL, '2021-07-16 20:24:34', '2021-07-16 20:24:34'),
(3, 'App\\Models\\User', 1, 'my-app-token', '586913dae2a726906f090aac2e1b52ff36a2726bcf7e9d42b8c237e0b682c270', '[\"*\"]', NULL, '2021-07-16 20:36:10', '2021-07-16 20:36:10'),
(4, 'App\\Models\\User', 1, 'my-app-token', 'a1affdc022f905661e536636e5b3150b3cdbe737f8d2ebe9db959c2901a303b7', '[\"*\"]', NULL, '2021-07-16 20:36:31', '2021-07-16 20:36:31'),
(5, 'App\\Models\\User', 1, 'my-app-token', 'edd725b7cfe673ed5591a46c9310c837c15d545a41adfa224fccc5b62ffcfcd4', '[\"*\"]', NULL, '2021-07-16 20:39:02', '2021-07-16 20:39:02'),
(6, 'App\\Models\\User', 1, 'my-app-token', '84aafb60832154aab178786ff46d283fa23f809f45a0051f9065859c013496b3', '[\"*\"]', NULL, '2021-07-17 00:02:13', '2021-07-17 00:02:13'),
(7, 'App\\Models\\User', 1, 'my-app-token', 'f5060bcb061e2338f232c3c7479c81034441fe5f536625c1364895af81dad376', '[\"*\"]', NULL, '2021-07-17 02:56:06', '2021-07-17 02:56:06'),
(8, 'App\\Models\\User', 1, 'my-app-token', 'e009548673bd4219698f400140e2c5579c513be603a9c24c5dc7cebe78129622', '[\"*\"]', NULL, '2021-07-17 07:56:23', '2021-07-17 07:56:23'),
(9, 'App\\Models\\User', 1, 'my-app-token', 'af8b111c1736717b28d9bc68770024409aaebe8371f155dca5a934f8cc58e7d0', '[\"*\"]', NULL, '2021-07-17 20:44:39', '2021-07-17 20:44:39'),
(10, 'App\\Models\\User', 11, 'my-app-token', '48c8d06b275639476f5f4653b8706ea92166e0ea3bc2068838c3ae2608ab98cb', '[\"*\"]', NULL, '2021-07-18 10:11:30', '2021-07-18 10:11:30'),
(11, 'App\\Models\\User', 12, 'my-app-token', '10095523d80a9904887d260fde44eb7a2dea9b78f7719ec4890fa5efdad6bd56', '[\"*\"]', NULL, '2021-07-18 10:13:03', '2021-07-18 10:13:03'),
(12, 'App\\Models\\User', 14, 'my-app-token', 'bdfd093217ed01145d89c556a67f3cf2037d77796492fd41b1050ed7c40b3fa4', '[\"*\"]', NULL, '2021-07-18 10:18:23', '2021-07-18 10:18:23'),
(13, 'App\\Models\\User', 17, 'my-app-token', '6cd8dbd0bd687b14f70859d2e12b6d6050636efabec6e7d699e9ef36c7658391', '[\"*\"]', NULL, '2021-07-18 10:36:55', '2021-07-18 10:36:55'),
(14, 'App\\Models\\User', 18, 'my-app-token', '8c1b64b8b87abcaadc1aacd1e751457fd6bcf4cf1a23b851adf9597e498ff6c0', '[\"*\"]', NULL, '2021-07-18 10:41:01', '2021-07-18 10:41:01'),
(15, 'App\\Models\\User', 19, 'my-app-token', '8316e1b508ef8dd8ead7e840f76863eb475589218e2aab7153f1272926fc73d4', '[\"*\"]', NULL, '2021-07-18 22:21:35', '2021-07-18 22:21:35'),
(16, 'App\\Models\\User', 20, 'my-app-token', '20a324bde6c3357099c59f573e2fe086408822b2453af4285579d2836c64263b', '[\"*\"]', NULL, '2021-07-18 23:06:22', '2021-07-18 23:06:22'),
(17, 'App\\Models\\User', 21, 'my-app-token', 'd806a0b1b457e1c586cdf6970d49b50e564f159b1e805cd63749c185f6abac2d', '[\"*\"]', NULL, '2021-07-18 23:09:55', '2021-07-18 23:09:55'),
(18, 'App\\Models\\User', 22, 'my-app-token', '8a5a072c9ed1930b1c334cb05a97f799f23226dc436deaa18d22d60c25bf24ce', '[\"*\"]', NULL, '2021-07-18 23:14:52', '2021-07-18 23:14:52'),
(19, 'App\\Models\\User', 1, 'my-app-token', '44b472bbe584119caea78e9b49bebd353c5773595f19d0512caaba0750231c27', '[\"*\"]', NULL, '2021-07-19 00:04:45', '2021-07-19 00:04:45'),
(20, 'App\\Models\\User', 23, 'my-app-token', '101077215769524e883ff0e6064ebac99865e130b719440399d9b75f4e3b8a81', '[\"*\"]', NULL, '2021-07-19 04:17:51', '2021-07-19 04:17:51'),
(21, 'App\\Models\\User', 23, 'my-app-token', '731fbe69b80347ef3cc9522889367d3c113354dfc547ff9319f8fc5d42418585', '[\"*\"]', NULL, '2021-07-19 04:20:52', '2021-07-19 04:20:52'),
(22, 'App\\Models\\User', 1, 'my-app-token', '56427504f324cc1ebb554108c1ead6bfab26598c931c31508190cce82d1d8e76', '[\"*\"]', NULL, '2021-07-21 00:54:01', '2021-07-21 00:54:01'),
(23, 'App\\Models\\User', 1, 'my-app-token', 'b791e0a1806a466a935230b67141083a3c82d3728ad3204879c8295576df22ef', '[\"*\"]', NULL, '2021-07-21 00:54:41', '2021-07-21 00:54:41'),
(24, 'App\\Models\\User', 1, 'my-app-token', '72d09642bb2442c47a743dbe3a59d160c22a6cd725fa39f839d81c51fc2e189f', '[\"*\"]', NULL, '2021-07-21 00:56:04', '2021-07-21 00:56:04'),
(25, 'App\\Models\\User', 1, 'my-app-token', '3a1869452d9e10ff4947a4f09c81aab50802920210c06df9f2f19fa87f6bfc08', '[\"*\"]', NULL, '2021-07-21 00:57:05', '2021-07-21 00:57:05'),
(26, 'App\\Models\\User', 1, 'my-app-token', 'baf3aadaef91bd8e9c8d2a759eed2611f01c6d64fcbce1e6f728d70413916d9d', '[\"*\"]', NULL, '2021-07-21 00:57:45', '2021-07-21 00:57:45'),
(27, 'App\\Models\\User', 1, 'my-app-token', '004e1cd1c3875dd9721f155df38c1e8015e326ea3f5239cc51a75d08990c6916', '[\"*\"]', NULL, '2021-07-21 01:00:31', '2021-07-21 01:00:31'),
(28, 'App\\Models\\User', 1, 'my-app-token', '8aea08adb9ff7da84a9a4901a4d115ba741fba3f438fe28251fabca8cb3c0800', '[\"*\"]', NULL, '2021-07-21 01:01:02', '2021-07-21 01:01:02'),
(29, 'App\\Models\\User', 1, 'my-app-token', 'd83aad928de2e5d6cb5b6e6243c2cb6622938a5e5d923cd5fd7ad18da542696b', '[\"*\"]', NULL, '2021-07-21 01:01:24', '2021-07-21 01:01:24'),
(30, 'App\\Models\\User', 1, 'my-app-token', '87505756a50a350b2ab9a691d78866c086714d2a61c51fc697dcdd64cb830ba5', '[\"*\"]', NULL, '2021-07-21 01:03:25', '2021-07-21 01:03:25'),
(31, 'App\\Models\\User', 1, 'my-app-token', 'e1f76e2f564d489582a686c3fe0a3e2b74e38fec30d75de3f3ffaf07b3cd06de', '[\"*\"]', NULL, '2021-07-21 01:05:51', '2021-07-21 01:05:51'),
(32, 'App\\Models\\User', 1, 'my-app-token', 'c52696b6af1cf07cda1a9af504a687912b8552427dea14086af460fa0e038957', '[\"*\"]', NULL, '2021-07-21 01:07:34', '2021-07-21 01:07:34'),
(33, 'App\\Models\\User', 1, 'my-app-token', '228654379fe658bde22f436ea8efa2d0fb08dea0c5cbfce3632d8cd27acebcf6', '[\"*\"]', NULL, '2021-07-21 01:08:27', '2021-07-21 01:08:27'),
(34, 'App\\Models\\User', 1, 'my-app-token', '7c8bb84641f54e870da504acb54006e186a11fa9ba63e129281af1af90ea2af9', '[\"*\"]', NULL, '2021-07-21 01:33:07', '2021-07-21 01:33:07'),
(35, 'App\\Models\\User', 1, 'my-app-token', '6d84c49309fc56291d9a9f594112e8f6cad0e7be3ab2b61b8005c0eff2dc144e', '[\"*\"]', NULL, '2021-07-21 02:09:02', '2021-07-21 02:09:02'),
(36, 'App\\Models\\User', 1, 'my-app-token', '5fac65763a743e379d780e83b44d77eabae0a7696c8ba6024cd6a72a95f485c4', '[\"*\"]', NULL, '2021-07-21 03:57:34', '2021-07-21 03:57:34');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `pro_id` int(11) NOT NULL,
  `user_id` int(10) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `shrt_name` varchar(255) DEFAULT NULL,
  `qty` varchar(11) DEFAULT NULL,
  `discount` varchar(11) DEFAULT NULL,
  `discounted_price` varchar(100) DEFAULT NULL,
  `sub_catg_id` varchar(11) DEFAULT NULL,
  `brand` varchar(150) DEFAULT NULL,
  `catg_id` int(10) DEFAULT NULL,
  `long_des` text DEFAULT NULL,
  `short_des` text DEFAULT NULL,
  `price` double(9,2) DEFAULT NULL,
  `size` varchar(10) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `bid_option` varchar(10) DEFAULT NULL,
  `status` varchar(1) NOT NULL DEFAULT 'P',
  `is_approve` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`pro_id`, `user_id`, `name`, `shrt_name`, `qty`, `discount`, `discounted_price`, `sub_catg_id`, `brand`, `catg_id`, `long_des`, `short_des`, `price`, `size`, `color`, `image`, `type`, `bid_option`, `status`, `is_approve`, `created_at`, `updated_at`, `deleted_at`) VALUES
(4, 1, 'Renault Triber RXZ, 2019, Petrol', 'Renault Triber RXZ, 2019, Petrol', '2', '10', '450', '31', '1', NULL, '<h3>Description</h3>\r\n\r\n<p>ADDITIONAL VEHICLE INFORMATION:</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>ABS: Yes</p>\r\n\r\n<p>Accidental: No</p>\r\n\r\n<p>Air Conditioning: With Heater</p>\r\n\r\n<p>Number of Airbags: 2 airbags</p>\r\n\r\n<p>Battery Condition: New</p>\r\n\r\n<p>Bluetooth: Yes</p>\r\n\r\n<p>Vehicle Certified: Yes</p>\r\n\r\n<p>Color: Silver</p>\r\n\r\n<p>Insurance Type: Comprehensive</p>\r\n\r\n<p>Lock System: Remote Controlled Central</p>\r\n\r\n<p>Make Month: September</p>\r\n\r\n<p>Power steering: Yes</p>\r\n\r\n<p>Power Windows: Front &amp; rear</p>\r\n\r\n<p>AM/FM Radio: Yes</p>\r\n\r\n<p>Registration Place: MH</p>\r\n\r\n<p>Exchange: Yes</p>\r\n\r\n<p>Finance: Yes</p>\r\n\r\n<p>Service History: Available</p>\r\n\r\n<p>Tyre Condition: New</p>', '<h3>Description</h3>\r\n\r\n<p>ADDITIONAL VEHICLE INFORMATION:</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>ABS: Yes</p>\r\n\r\n<p>Accidental: No</p>\r\n\r\n<p>Air Conditioning: With Heater</p>\r\n\r\n<p>Number of Airbags: 2 airbags</p>\r\n\r\n<p>Battery Condition: New</p>\r\n\r\n<p>Bluetooth: Yes</p>\r\n\r\n<p>Vehicle Certified: Yes</p>\r\n\r\n<p>Color: Silver</p>\r\n\r\n<p>Insurance Type: Comprehensive</p>\r\n\r\n<p>Lock System: Remote Controlled Central</p>\r\n\r\n<p>Make Month: September</p>\r\n\r\n<p>Power steering: Yes</p>\r\n\r\n<p>Power Windows: Front &amp; rear</p>\r\n\r\n<p>AM/FM Radio: Yes</p>\r\n\r\n<p>Registration Place: MH</p>\r\n\r\n<p>Exchange: Yes</p>\r\n\r\n<p>Finance: Yes</p>\r\n\r\n<p>Service History: Available</p>\r\n\r\n<p>Tyre Condition: New</p>', 500.00, '[\"X\"]', '[null]', NULL, 'medium', 'No', 'A', 0, '2021-07-16 21:06:01', '2021-07-16 22:09:20', NULL),
(8, 1, 'HP EliteBook Folio 9480m i5 4310U 2.0Ghz 8GB 120GB SSD 14\"HD USB 3.0 W10', 'HP EliteBook Folio 9480m i5 4310U 2.0Ghz 8GB 120GB SSD 14\"HD USB 3.0 W10', '12', '25', '375', NULL, '1', NULL, '<p>HP EliteBook Folio 9480m</p>\r\n\r\n<p>Ex Lease Refurbished Business Laptop</p>\r\n\r\n<p>Note: Re-installed and tested (Excellent working condition). Minor cosmetic wear and tear from use. No damage.</p>\r\n\r\n<p>Everything a business Ultrabook&trade; should be. Travel light at full power. HP&rsquo;s first business Ultrabook&trade; with docking capabilities included, the HP EliteBook Folio keeps you productive from the airport to the desktop. Resume from sleep quickly and knock out projects fast. With long battery life, you can keep up with whatever the day brings. Enterprise ready. IT friendly. All business.</p>\r\n\r\n<p>Specification:</p>\r\n\r\n<ul>\r\n	<li>Processor: Intel&reg; Core&trade; i5-4310U with Intel HD Graphics 4400 (2 GHz Up to 3 GHz with Intel Turbo Boost Technology, 3 MB cache, 2 cores)</li>\r\n	<li>Core: 2 @ 2.0GHz each Turbo Boost 2.7Ghz</li>\r\n	<li>Threads: 4</li>\r\n	<li>Memory: 8GB DDR3</li>\r\n	<li>Max Ram Upgradable: 16GB DDR3</li>\r\n	<li>Storage Drive: 120GB SSD</li>\r\n	<li>Optical Drive: None</li>\r\n	<li>Intel HD 4400 Graphics</li>\r\n	<li>14 inches LED diagonal wide-viewing angle anti-glare</li>\r\n	<li>Wireless LAN, Bluetooth&reg; 2.1</li>\r\n	<li>Network: Fast Ethernet card</li>\r\n	<li>Integrated dual-microphone array</li>\r\n	<li>Internal Stereo Speakers High Definition Audio</li>\r\n	<li>VGA Port</li>\r\n	<li>Webcam: 2MP camera</li>\r\n	<li>2 &ndash; USB 3.0 Port</li>\r\n	<li>1 &ndash; USB 2.0 Port</li>\r\n	<li>Weight: 1.6Kg</li>\r\n</ul>\r\n\r\n<p>Software installed:</p>\r\n\r\n<ul>\r\n	<li>Windows 10 Pro (Genuine Win 8 Pro COA Attached)</li>\r\n	<li>Drivers installed</li>\r\n</ul>\r\n\r\n<p>This machine is Windows 10 Capable</p>\r\n\r\n<p>Items Included: HP Elitebook Folio 9480m Business Laptop 1 X Genuine HP Adapter</p>\r\n\r\n<ul>\r\n	<li>photo sample only</li>\r\n	<li>3 Months Hardware warranty (Return to Base) excludes Software.</li>\r\n	<li>Please Note Battery and Adapter for Laptops are not covered under warranty as they are regarded as consumables</li>\r\n</ul>\r\n\r\n<p>NZ PC Clearance Terms of Services Apply</p>\r\n\r\n<p>Details</p>', '<p>HP EliteBook Folio 9480m</p>\r\n\r\n<p>Ex Lease Refurbished Business Laptop</p>\r\n\r\n<p>Note: Re-installed and tested (Excellent working condition). Minor cosmetic wear and tear from use. No damage.</p>\r\n\r\n<p>Everything a business Ultrabook&trade; should be. Travel light at full power. HP&rsquo;s first business Ultrabook&trade; with docking capabilities included, the HP EliteBook Folio keeps you productive from the airport to the desktop. Resume from sleep quickly and knock out projects fast. With long battery life, you can keep up with whatever the day brings. Enterprise ready. IT friendly. All business.</p>\r\n\r\n<p>Specification:</p>\r\n\r\n<ul>\r\n	<li>Processor: Intel&reg; Core&trade; i5-4310U with Intel HD Graphics 4400 (2 GHz Up to 3 GHz with Intel Turbo Boost Technology, 3 MB cache, 2 cores)</li>\r\n	<li>Core: 2 @ 2.0GHz each Turbo Boost 2.7Ghz</li>\r\n	<li>Threads: 4</li>\r\n	<li>Memory: 8GB DDR3</li>\r\n	<li>Max Ram Upgradable: 16GB DDR3</li>\r\n	<li>Storage Drive: 120GB SSD</li>\r\n	<li>Optical Drive: None</li>\r\n	<li>Intel HD 4400 Graphics</li>\r\n	<li>14 inches LED diagonal wide-viewing angle anti-glare</li>\r\n	<li>Wireless LAN, Bluetooth&reg; 2.1</li>\r\n	<li>Network: Fast Ethernet card</li>\r\n	<li>Integrated dual-microphone array</li>\r\n	<li>Internal Stereo Speakers High Definition Audio</li>\r\n	<li>VGA Port</li>\r\n	<li>Webcam: 2MP camera</li>\r\n	<li>2 &ndash; USB 3.0 Port</li>\r\n	<li>1 &ndash; USB 2.0 Port</li>\r\n	<li>Weight: 1.6Kg</li>\r\n</ul>\r\n\r\n<p>Software installed:</p>\r\n\r\n<ul>\r\n	<li>Windows 10 Pro (Genuine Win 8 Pro COA Attached)</li>\r\n	<li>Drivers installed</li>\r\n</ul>\r\n\r\n<p>This machine is Windows 10 Capable</p>\r\n\r\n<p>Items Included: HP Elitebook Folio 9480m Business Laptop 1 X Genuine HP Adapter</p>\r\n\r\n<ul>\r\n	<li>photo sample only</li>\r\n	<li>3 Months Hardware warranty (Return to Base) excludes Software.</li>\r\n	<li>Please Note Battery and Adapter for Laptops are not covered under warranty as they are regarded as consumables</li>\r\n</ul>\r\n\r\n<p>NZ PC Clearance Terms of Services Apply</p>\r\n\r\n<p>Details</p>', 500.00, '[\"M\"]', '[null]', NULL, NULL, 'Both', 'A', 0, '2021-07-20 09:37:50', '2021-07-20 09:38:46', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `display_name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'super_admin', 'Super Admin', NULL, NULL, NULL),
(2, 'admin', 'Admin', NULL, NULL, NULL),
(3, 'buyer', 'Buyer', NULL, NULL, NULL),
(4, 'seller', 'Seller', NULL, NULL, NULL),
(5, 'service', 'Service', NULL, NULL, NULL),
(6, 'staff', 'Staff', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `shipping_address`
--

CREATE TABLE `shipping_address` (
  `id` int(11) NOT NULL,
  `f_namel` varchar(50) DEFAULT NULL,
  `l_name` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `zip` varchar(10) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone_no` varchar(15) DEFAULT NULL,
  `order_note` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_role` smallint(2) NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_no` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `f_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `l_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dob` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zip` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `district_town` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `domain_url` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `template_id` smallint(3) DEFAULT NULL,
  `template_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_finder` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_terms` tinyint(1) NOT NULL DEFAULT 0,
  `status` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'P',
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `business_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `billing_address` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `billing_address_finder` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nz_business_no` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nz_gst_no` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `user_role`, `email`, `phone_no`, `f_name`, `l_name`, `dob`, `gender`, `country`, `city`, `state`, `zip`, `district_town`, `domain_url`, `template_id`, `template_name`, `address`, `address_finder`, `is_terms`, `status`, `token`, `email_verified_at`, `password`, `remember_token`, `business_name`, `billing_address`, `billing_address_finder`, `nz_business_no`, `nz_gst_no`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Admin', 1, 'admin@gmail.com', '1234567890', NULL, NULL, NULL, NULL, 'New Zealand', NULL, NULL, NULL, 'Auckland', '127.0.0.1:8000', 2, 'template_one', NULL, NULL, 1, 'A', '36|y3WAbFFTyEQICYsb6MKttVUD8vjTas92MH50fu1f', '2021-04-03 18:30:00', '$2y$10$bQdrSFRrtvczVe1skQIo1eK0gp7CEYX16W1JOL1l1XVhg1nmwV3Ey', 'crI1fmAJP480XIcMMR80w85eHn7DIHWak99slGqQZgtvvAK0Q92ccWD0Umr8', NULL, NULL, NULL, NULL, NULL, '2021-04-03 18:30:00', '2021-07-21 03:57:34', NULL),
(11, NULL, 5, 'test@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 'P', NULL, NULL, '$2y$10$ybFJUidEc8DWcg3ElOJcUO7xTejPE6oaEeHCpXJxcbkh9PxpQDSMC', 'Wdq1J3iPayCx7eASp62oESVdTnJr0RxKXEjVA8TS', NULL, NULL, NULL, NULL, NULL, '2021-07-18 10:11:30', '2021-07-18 10:11:30', NULL),
(12, NULL, 5, 'test1@gmail.com', '35454534', 'sdf', 'dfs', NULL, NULL, NULL, NULL, NULL, NULL, 'Northland - Dargaville', NULL, NULL, NULL, NULL, 'dsf', 0, 'P', NULL, NULL, '$2y$10$iQ44W6gwVTBKh/qh/hEl0OjfccJlJtF5q3LUzn0jSo6NxWAv.TlcC', '19qtdRJJWoSSuaVUez61oYxtqYrSaZkHnt8zl30S', 'sdf', NULL, NULL, 'sdf', '545345', '2021-07-18 10:13:03', '2021-07-18 10:13:03', NULL),
(14, NULL, 5, 'test13@gmail.com', '354548778', 'sdf', 'dfs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'dsf', 0, 'P', NULL, NULL, '$2y$10$5Jz95ln6LW5r/J7kf.WmxOJvNQ5rvmfsHg2elvMRoNw3/CFM6Pjei', 'BB99R0xfbJDS9QCQIMSWKvnenWVP2dwadUBgNdA1', 'sdf', NULL, NULL, 'sdf', '545345', '2021-07-18 10:18:23', '2021-07-18 10:18:23', NULL),
(15, NULL, 4, 'test1d3@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 'P', NULL, NULL, '$2y$10$MNYjw1ECWjv4dUIDqBkT4evqYh/B59k1yirDUrA8eLF3PXCpeO6pK', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-18 10:31:50', '2021-07-18 10:31:50', NULL),
(16, NULL, 4, 'dsfgds@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 'P', NULL, '2021-07-17 23:02:31', '$2y$10$SZS0Q0PwGMXbasnDQ1uHpengqIN44Jd3h8Ww3SmlbHO5LFhMYVWHK', 'NLU9dfU7IoupEsGD8KJ2naEHZ0miYYm2OP1YQMUK1075rz7VGycHXhM1T9ss', NULL, NULL, NULL, NULL, NULL, '2021-07-18 10:34:51', '2021-07-18 11:02:31', NULL),
(17, NULL, 4, 'sdfs@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 'P', NULL, NULL, 'kOOq83WkbqU2A7Tr6wxk6Z7b3VVu4cyjgMaS1Fom', 'hn3F1MzeRBbgIWpw2uMIuBzdEcdWCMW00dUPdJxb92wwzXeWsjx9tNCvfb71', NULL, NULL, NULL, NULL, NULL, '2021-07-18 10:36:55', '2021-07-18 10:36:55', NULL),
(18, NULL, 4, 'dsf@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 'P', NULL, NULL, '$2y$10$.fRzbA7HlV7e9zUnsLWKq.r38x/SZJOw2VobFfTY7/Xlj2Z6ufia2', '9nQNShVMEws0aHwwk3ovkC0qUDfTCtIT58u0a9A6', NULL, NULL, NULL, NULL, NULL, '2021-07-18 10:41:01', '2021-07-18 10:41:01', NULL),
(19, NULL, 4, 'testfdsdfs@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 'P', NULL, '2021-07-18 22:26:04', '$2y$10$ujvRS7DclLOAGyZuOBJpeutQNFsb22KHFBPH383eY4PVJLCiRaJMm', 'NGsUris8VZinnSmWIJXVmbOHHnJSXE0Hqq3y3F35IcJpznBGFSQLRh8JOKR7', NULL, NULL, NULL, NULL, NULL, '2021-07-18 22:21:35', '2021-07-18 22:26:04', NULL),
(20, ' sd', 3, 'sddsffs@gmail.com', '3545', 'sdf', 'sd', '2021-07-16', 'Male', NULL, NULL, NULL, NULL, 'Northland - Kaikohe', NULL, NULL, NULL, 'fgd', NULL, 0, 'P', NULL, NULL, '$2y$10$QM5IDNRvB1G0lvjq7VlPf.vrnsRBjGgIn041GNIjoIGnhJZ6ysE4q', '7Oc8apOy9nVYuKT6p8AzPnn0w1SRanHls7RF3SbV', NULL, NULL, NULL, NULL, NULL, '2021-07-18 23:06:22', '2021-07-18 23:06:22', NULL),
(21, ' dfgfdg', 3, 'sdf4543534@gmail.com', '2345435434', 'dfhdfgdf', 'dfgfdg', '2021-07-21', 'Male', NULL, NULL, NULL, NULL, 'Northland - Dargaville', NULL, NULL, NULL, 'fgd', NULL, 0, 'P', NULL, NULL, '$2y$10$dX/a2UmxUWn1aAjuwyASNunbGqNT4B/dQdOlPNdRi/oLUMPS/00Wq', 'IoJRPkPx3xbXrZ1IvFUlUMVLUYAU7n79gjr1vSgW', NULL, NULL, NULL, NULL, NULL, '2021-07-18 23:09:55', '2021-07-18 23:09:55', NULL),
(22, ' ', 3, 'testfrtrtdsdfs@gmail.com', '345435343', 'test', NULL, '2021-07-23', 'Male', NULL, NULL, NULL, NULL, 'Northland - Dargaville', NULL, NULL, NULL, 'dfgfdgh', NULL, 0, 'P', NULL, NULL, '$2y$10$rILTgB04n2DcqAz4G2coV.R39QdmktKlc37jyQNTYOIgogilXSWhW', 'GTpsr83bwIlaTKUHVZtdzDuW5zvhnkZfp2PVFyAj', NULL, NULL, NULL, NULL, NULL, '2021-07-18 23:14:52', '2021-07-18 23:14:52', NULL),
(23, ' dsfdsf', 3, 'sddddsd@gmail.com', '234324324', 'sfdsf', 'dsfdsf', '2021-07-29', 'Female', 'NZ', 'test', 'Aucland', NULL, NULL, NULL, NULL, NULL, 'trsdd', NULL, 0, 'P', '21|sI4qEpYqOSUzLcsx58rybIa3FhUB7lF4RHeBgdzJ', '2021-07-19 04:20:35', '$2y$10$ESn2Wnx.qWDl7e1wCVoHie/7CBR6vk5K/KDbVyhjXMTKKSk0VXcM2', '0Qk0vdioEvMxp50mViV3IEHzUyLXIQXBzzZl2r0T', NULL, NULL, NULL, NULL, NULL, '2021-07-19 04:17:51', '2021-07-19 04:20:52', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`cart_item_id`);

--
-- Indexes for table `catg_mast`
--
ALTER TABLE `catg_mast`
  ADD PRIMARY KEY (`catg_id`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`doc_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_unique` (`name`);

--
-- Indexes for table `permission_user`
--
ALTER TABLE `permission_user`
  ADD PRIMARY KEY (`user_id`,`permission_id`,`user_type`),
  ADD KEY `permission_user_permission_id_foreign` (`permission_id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pro_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`);

--
-- Indexes for table `shipping_address`
--
ALTER TABLE `shipping_address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `mobile` (`phone_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `cart_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `catg_mast`
--
ALTER TABLE `catg_mast`
  MODIFY `catg_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `doc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `pro_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `shipping_address`
--
ALTER TABLE `shipping_address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `permission_user`
--
ALTER TABLE `permission_user`
  ADD CONSTRAINT `permission_user_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
