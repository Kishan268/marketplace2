-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 05, 2021 at 05:48 PM
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
-- Database: `marketplace`
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
(1, 'Opp', '2021-07-16 15:22:35', '2021-07-16 15:22:35'),
(2, 'Men', '2021-07-16 15:22:51', '2021-07-16 15:22:51');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buy_trade_lead`
--

INSERT INTO `buy_trade_lead` (`buy_trd_id`, `user_id`, `product`, `quantity`, `price_range`, `picture`, `detls`, `keywords`, `valid_for`, `catg_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 4, 'test', 23, 20.00, '4/image/1618162032_identity.jpg', 'asdasd', 'asdasdasd', 30, 35, 'P', '2021-04-11 06:27:12', '2021-04-11 06:27:25', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `ip` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_price` double(10,2) DEFAULT NULL,
  `discounted_price` double(10,2) DEFAULT NULL,
  `tax_price` double(10,2) DEFAULT NULL,
  `amount` double(10,2) DEFAULT NULL,
  `total_item` int(11) DEFAULT NULL,
  `item_qty` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cart_item`
--

CREATE TABLE `cart_item` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cart_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `unit_price` double(10,2) DEFAULT NULL,
  `total_price` double(10,2) DEFAULT NULL,
  `tax_percentage` double(10,2) DEFAULT NULL,
  `discount_percentage` double(10,2) DEFAULT NULL,
  `discount_amount` double(10,2) DEFAULT NULL,
  `tax_amount` double(10,2) DEFAULT NULL,
  `amount` double(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  `level` smallint(1) DEFAULT NULL,
  `shrt_name` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `catg_mast`
--

INSERT INTO `catg_mast` (`catg_id`, `catg_type`, `parent_id`, `catg_name`, `catg_img`, `meta_title`, `meta_desc`, `meta_keywords`, `status`, `level`, `shrt_name`) VALUES
(2, NULL, NULL, 'Computer', NULL, NULL, NULL, NULL, 'A', NULL, NULL),
(3, NULL, 2, 'Printer', NULL, NULL, NULL, NULL, 'A', NULL, NULL),
(4, NULL, 2, 'Pendriv', NULL, NULL, NULL, NULL, 'A', NULL, NULL),
(5, NULL, NULL, 'Mobile', NULL, NULL, NULL, NULL, 'A', NULL, NULL),
(6, NULL, 5, 'Accessories', NULL, NULL, NULL, NULL, 'A', NULL, NULL),
(7, NULL, 5, 'Mobile phones', NULL, NULL, NULL, NULL, 'A', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `chat_with_sellers`
--

CREATE TABLE `chat_with_sellers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chat_with_sellers`
--

INSERT INTO `chat_with_sellers` (`id`, `user_id`, `seller_id`, `name`, `email`, `message`, `status`, `created_at`, `updated_at`) VALUES
(1, 86, 1, 'customer', 'customer2@gmail.com', 'hi', 0, '2021-09-04 05:32:36', '2021-09-04 05:32:36'),
(2, 86, 1, 'customer', 'customer2@gmail.com', 'hi', 0, '2021-09-04 05:33:51', '2021-09-04 05:33:51'),
(3, 44, 1, 'buyer', 'customer@gmail.com', 'dfgd', 0, '2021-09-04 05:36:40', '2021-09-04 05:36:40'),
(4, 86, 1, 'customer', 'customer2@gmail.com', 'hi', 0, '2021-09-04 05:43:07', '2021-09-04 05:43:07'),
(5, 86, 1, 'Admin', 'admin@gmail.com', 'sdfs', 0, '2021-09-04 05:46:24', '2021-09-04 05:46:24'),
(6, 86, 1, 'customer', 'customer2@gmail.com', 'hi', 0, '2021-09-04 05:46:57', '2021-09-04 05:46:57'),
(7, 86, 1, 'Admin', 'admin@gmail.com', 'hellow', 0, '2021-09-04 05:47:20', '2021-09-04 05:47:20'),
(8, 86, 1, 'Admin', 'admin@gmail.com', 'hi', 0, '2021-09-04 05:49:19', '2021-09-04 05:49:19'),
(9, 86, 1, 'customer', 'customer2@gmail.com', 'he', 0, '2021-09-04 05:49:28', '2021-09-04 05:49:28'),
(10, 86, 1, 'customer', 'customer2@gmail.com', 'he', 0, '2021-09-04 05:49:50', '2021-09-04 05:49:50'),
(11, 86, 1, 'Admin', 'admin@gmail.com', 'hi', 0, '2021-09-04 05:49:59', '2021-09-04 05:49:59'),
(12, 44, 1, 'buyer', 'customer@gmail.com', 'sd', 0, '2021-09-04 05:51:24', '2021-09-04 05:51:24'),
(13, 86, 1, 'Admin', 'admin@gmail.com', 'sds', 0, '2021-09-04 05:51:30', '2021-09-04 05:51:30'),
(14, 44, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 05:51:30', '2021-09-04 05:51:30'),
(15, 86, 1, 'Admin', 'admin@gmail.com', 'sd', 0, '2021-09-04 05:51:44', '2021-09-04 05:51:44'),
(16, 44, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 05:51:45', '2021-09-04 05:51:45'),
(17, 86, 1, 'customer', 'customer2@gmail.com', 'h', 0, '2021-09-04 05:53:32', '2021-09-04 05:53:32'),
(18, 86, 1, 'Admin', 'admin@gmail.com', 'hi', 0, '2021-09-04 05:54:25', '2021-09-04 05:54:25'),
(19, 44, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 05:54:26', '2021-09-04 05:54:26'),
(20, 86, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 05:54:27', '2021-09-04 05:54:27'),
(21, 44, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 05:54:27', '2021-09-04 05:54:27'),
(22, 86, 1, 'Admin', 'admin@gmail.com', 'hi', 0, '2021-09-04 05:54:55', '2021-09-04 05:54:55'),
(23, 44, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 05:54:56', '2021-09-04 05:54:56'),
(24, 86, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 05:54:57', '2021-09-04 05:54:57'),
(25, 44, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 05:54:57', '2021-09-04 05:54:57'),
(26, 86, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 05:54:57', '2021-09-04 05:54:57'),
(27, 86, 1, 'customer', 'customer2@gmail.com', 'h', 0, '2021-09-04 05:55:20', '2021-09-04 05:55:20'),
(28, 44, 1, 'buyer', 'customer@gmail.com', 'hi', 0, '2021-09-04 06:02:05', '2021-09-04 06:02:05'),
(29, 86, 1, 'Admin', 'admin@gmail.com', 'dsf', 0, '2021-09-04 06:11:17', '2021-09-04 06:11:17'),
(30, 86, 1, 'Admin', 'admin@gmail.com', 'sdf', 0, '2021-09-04 06:11:22', '2021-09-04 06:11:22'),
(31, 86, 1, 'Admin', 'admin@gmail.com', 'sdf', 0, '2021-09-04 06:12:13', '2021-09-04 06:12:13'),
(32, 86, 1, 'Admin', 'admin@gmail.com', 'sf', 0, '2021-09-04 06:12:18', '2021-09-04 06:12:18'),
(33, 44, 1, 'Admin', 'admin@gmail.com', 'sdf', 0, '2021-09-04 06:12:55', '2021-09-04 06:12:55'),
(34, 44, 1, 'Admin', 'admin@gmail.com', 'dsfsd', 0, '2021-09-04 06:12:59', '2021-09-04 06:12:59'),
(35, 86, 1, 'Admin', 'admin@gmail.com', 'sds', 0, '2021-09-04 06:18:12', '2021-09-04 06:18:12'),
(36, 44, 1, 'Admin', 'admin@gmail.com', 'fdgdg', 0, '2021-09-04 06:18:57', '2021-09-04 06:18:57'),
(37, 86, 1, 'customer', 'customer2@gmail.com', 'sdf', 0, '2021-09-04 06:19:38', '2021-09-04 06:19:38'),
(38, 86, 1, 'customer', 'customer2@gmail.com', 'sdfsdf', 0, '2021-09-04 06:19:43', '2021-09-04 06:19:43'),
(39, 86, 1, 'customer', 'customer2@gmail.com', 'asd', 0, '2021-09-04 06:20:07', '2021-09-04 06:20:07'),
(40, 44, 1, 'Admin', 'admin@gmail.com', 'weffsd', 0, '2021-09-04 06:21:13', '2021-09-04 06:21:13'),
(41, 44, 1, 'Admin', 'admin@gmail.com', 'dafsdf', 0, '2021-09-04 06:22:03', '2021-09-04 06:22:03'),
(42, 44, 1, 'Admin', 'admin@gmail.com', 'sdfds', 0, '2021-09-04 06:22:06', '2021-09-04 06:22:06'),
(43, 44, 1, 'Admin', 'admin@gmail.com', 'asd', 0, '2021-09-04 06:23:00', '2021-09-04 06:23:00'),
(44, 44, 1, 'Admin', 'admin@gmail.com', 'asd', 0, '2021-09-04 06:23:08', '2021-09-04 06:23:08'),
(45, 86, 1, 'customer', 'customer2@gmail.com', 'asdasdas', 0, '2021-09-04 06:23:42', '2021-09-04 06:23:42'),
(46, 86, 1, 'customer', 'customer2@gmail.com', 'asdasdasas', 0, '2021-09-04 06:24:42', '2021-09-04 06:24:42'),
(47, 86, 1, 'customer', 'customer2@gmail.com', 'asdasdasas', 0, '2021-09-04 06:24:55', '2021-09-04 06:24:55'),
(48, 44, 1, 'Admin', 'admin@gmail.com', 'gdfgd', 0, '2021-09-04 06:24:59', '2021-09-04 06:24:59'),
(49, 44, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 06:25:00', '2021-09-04 06:25:00'),
(50, 44, 1, 'Admin', 'admin@gmail.com', 'assd', 0, '2021-09-04 06:26:03', '2021-09-04 06:26:03'),
(51, 44, 1, 'Admin', 'admin@gmail.com', 'dsfs', 0, '2021-09-04 06:26:18', '2021-09-04 06:26:18'),
(52, 44, 1, 'Admin', 'admin@gmail.com', 'dfg', 0, '2021-09-04 06:26:56', '2021-09-04 06:26:56'),
(53, 86, 1, 'customer', 'customer2@gmail.com', 'asdasdasas', 0, '2021-09-04 06:31:00', '2021-09-04 06:31:00'),
(54, 44, 1, 'Admin', 'admin@gmail.com', 'sdfsf', 0, '2021-09-04 06:31:14', '2021-09-04 06:31:14'),
(55, 86, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 06:31:15', '2021-09-04 06:31:15'),
(56, 44, 1, 'Admin', 'admin@gmail.com', 'dsdfds', 0, '2021-09-04 06:32:32', '2021-09-04 06:32:32'),
(57, 86, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 06:32:33', '2021-09-04 06:32:33'),
(58, 86, 1, 'Admin', 'admin@gmail.com', 'jjhk', 0, '2021-09-04 06:32:52', '2021-09-04 06:32:52'),
(59, 86, 1, 'Admin', 'admin@gmail.com', 'jk', 0, '2021-09-04 06:33:00', '2021-09-04 06:33:00'),
(60, 86, 1, 'customer', 'customer2@gmail.com', 'asdasdasas', 0, '2021-09-04 06:33:20', '2021-09-04 06:33:20'),
(61, 86, 1, 'Admin', 'admin@gmail.com', 'asd', 0, '2021-09-04 06:33:36', '2021-09-04 06:33:36'),
(62, 44, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 06:33:37', '2021-09-04 06:33:37'),
(63, 86, 1, 'customer', 'customer2@gmail.com', 's', 0, '2021-09-04 06:33:43', '2021-09-04 06:33:43'),
(64, 86, 1, 'customer', 'customer2@gmail.com', 'sfsdfs', 0, '2021-09-04 22:27:44', '2021-09-04 22:27:44'),
(65, 44, 1, 'Admin', 'admin@gmail.com', 'dsf', 0, '2021-09-04 22:31:42', '2021-09-04 22:31:42'),
(66, 86, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 22:31:43', '2021-09-04 22:31:43'),
(67, 44, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 22:31:43', '2021-09-04 22:31:43'),
(68, 86, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 22:31:43', '2021-09-04 22:31:43'),
(69, 86, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-04 22:31:44', '2021-09-04 22:31:44'),
(70, 86, 1, 'Admin', 'admin@gmail.com', 'hi', 0, '2021-09-04 23:46:59', '2021-09-04 23:46:59'),
(71, 86, 1, 'customer', 'customer2@gmail.com', 'd', 0, '2021-09-04 23:47:08', '2021-09-04 23:47:08'),
(72, 86, 1, 'Admin', 'admin@gmail.com', 'h\'', 0, '2021-09-04 23:48:28', '2021-09-04 23:48:28'),
(73, 86, 1, 'Admin', 'admin@gmail.com', 'hi', 0, '2021-09-05 01:17:40', '2021-09-05 01:17:40'),
(74, 86, 1, 'Admin', 'admin@gmail.com', 'hi', 0, '2021-09-05 01:18:19', '2021-09-05 01:18:19'),
(75, 44, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-05 01:18:20', '2021-09-05 01:18:20'),
(76, 86, 1, 'customer', 'customer2@gmail.com', 'rtr', 0, '2021-09-05 01:18:35', '2021-09-05 01:18:35'),
(77, 86, 1, 'Admin', 'admin@gmail.com', 'FSEF', 0, '2021-09-05 01:40:04', '2021-09-05 01:40:04'),
(78, 44, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-05 01:40:05', '2021-09-05 01:40:05'),
(79, 86, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-05 01:40:05', '2021-09-05 01:40:05'),
(80, 86, 1, 'Admin', 'admin@gmail.com', 'RTE', 0, '2021-09-05 01:40:47', '2021-09-05 01:40:47'),
(81, 86, 1, 'Admin', 'admin@gmail.com', 'df', 0, '2021-09-05 01:42:27', '2021-09-05 01:42:27'),
(82, 86, 1, 'customer', 'customer2@gmail.com', 'hi', 0, '2021-09-05 01:42:59', '2021-09-05 01:42:59'),
(83, 86, 1, 'Admin', 'admin@gmail.com', 'hi', 0, '2021-09-05 01:45:00', '2021-09-05 01:45:00'),
(84, 44, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-05 01:45:01', '2021-09-05 01:45:01'),
(85, 86, 1, 'customer', 'customer2@gmail.com', 'hi', 0, '2021-09-05 01:45:07', '2021-09-05 01:45:07'),
(86, 86, 1, 'customer', 'customer2@gmail.com', 'hiadasd', 0, '2021-09-05 01:45:49', '2021-09-05 01:45:49'),
(87, 44, 1, 'buyer', 'customer@gmail.com', 'asda', 0, '2021-09-05 01:48:14', '2021-09-05 01:48:14'),
(88, 44, 1, 'buyer', 'customer@gmail.com', 'a', 0, '2021-09-05 01:49:20', '2021-09-05 01:49:20'),
(89, 44, 1, 'buyer', 'customer@gmail.com', 'awe', 0, '2021-09-05 01:51:54', '2021-09-05 01:51:54'),
(90, 44, 1, 'buyer', 'customer@gmail.com', 'hi', 0, '2021-09-05 01:53:39', '2021-09-05 01:53:39'),
(91, 44, 1, 'buyer', 'customer@gmail.com', 'hi', 0, '2021-09-05 01:54:17', '2021-09-05 01:54:17'),
(92, 86, 1, 'Admin', 'admin@gmail.com', 'sdfs', 0, '2021-09-05 01:54:27', '2021-09-05 01:54:27'),
(93, 44, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-05 01:54:28', '2021-09-05 01:54:28'),
(94, 44, 1, 'buyer', 'customer@gmail.com', 'hi', 0, '2021-09-05 01:55:04', '2021-09-05 01:55:04'),
(95, 44, 1, 'buyer', 'customer@gmail.com', 'hi', 0, '2021-09-05 01:58:14', '2021-09-05 01:58:14'),
(96, 86, 1, 'Admin', 'admin@gmail.com', 'as', 0, '2021-09-05 01:59:03', '2021-09-05 01:59:03'),
(97, 44, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-05 01:59:04', '2021-09-05 01:59:04'),
(98, 86, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-05 01:59:04', '2021-09-05 01:59:04'),
(99, 86, 1, 'Admin', 'admin@gmail.com', NULL, 0, '2021-09-05 01:59:04', '2021-09-05 01:59:04'),
(100, 86, 1, 'Admin', 'admin@gmail.com', 'h', 0, '2021-09-05 02:00:07', '2021-09-05 02:00:07'),
(101, 44, 1, 'buyer', 'customer@gmail.com', 'hi', 0, '2021-09-05 02:00:39', '2021-09-05 02:00:39'),
(102, 44, 1, 'buyer', 'customer@gmail.com', 'hi', 0, '2021-09-05 02:00:52', '2021-09-05 02:00:52'),
(103, 44, 1, 'buyer', 'customer@gmail.com', 'hi', 0, '2021-09-05 02:01:24', '2021-09-05 02:01:24'),
(104, 44, 1, 'buyer', 'customer@gmail.com', 'hi', 0, '2021-09-05 02:02:43', '2021-09-05 02:02:43'),
(105, 44, 1, 'buyer', 'customer@gmail.com', 'hi', 0, '2021-09-05 02:04:46', '2021-09-05 02:04:46');

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
(5, '1618146730_identity.jpg', '4/images/1618146730_identity.jpg', 34580, 'image/jpeg', 'image_gallery', NULL, '2021-04-11 02:12:10', '2021-04-11 02:12:10', NULL),
(6, '1618146858_no_image.jpg', '4/images/1618146858_no_image.jpg', 10962, 'image/jpeg', 'image_gallery', NULL, '2021-04-11 02:14:18', '2021-04-11 02:14:18', NULL),
(7, '1618146862_advocate.jpg', '4/images/1618146862_advocate.jpg', 133604, 'image/jpeg', 'image_gallery', NULL, '2021-04-11 02:14:22', '2021-04-11 02:14:22', NULL),
(8, '1618146865_signup.jpg', '4/images/1618146865_signup.jpg', 154134, 'image/jpeg', 'image_gallery', NULL, '2021-04-11 02:14:25', '2021-04-11 02:14:25', NULL),
(9, '1628618471_2.jpg', '1/Product_images/1628618471_2.jpg', 86472, 'image/jpeg', 'product', '4', NULL, NULL, NULL),
(10, '1628055893_Screenshot_20210720_170755.png', '1/Product_images/1628055893_Screenshot_20210720_170755.png', 559507, 'image/png', 'product', '4', NULL, NULL, NULL),
(12, '1626489361_Jellyfish.jpg', '1/Product_images/1626489361_Jellyfish.jpg', 775702, 'image/jpeg', NULL, '6', NULL, NULL, NULL),
(13, '1626489361_Jellyfish.jpg', '1/Product_images/1626489361_Jellyfish.jpg', 775702, 'image/jpeg', NULL, '6', NULL, NULL, NULL),
(14, '1626587765_Jellyfish.jpg', '1/Product_images/1626587765_Jellyfish.jpg', 775702, 'image/jpeg', 'product', '7', NULL, NULL, NULL),
(15, '1626587765_Hydrangeas.jpg', '1/Product_images/1626587765_Hydrangeas.jpg', 595284, 'image/jpeg', 'product', '7', NULL, NULL, NULL),
(16, '1626793670_1510399071.jpg', '1/Product_images/1626793670_1510399071.jpg', 20714, 'image/jpeg', 'product', '8', NULL, NULL, NULL),
(17, '1626793671_1510399041.jpg', '1/Product_images/1626793671_1510399041.jpg', 43769, 'image/jpeg', 'product', '8', NULL, NULL, NULL),
(18, '1626793671_1510399030.jpg', '1/Product_images/1626793671_1510399030.jpg', 24199, 'image/jpeg', 'product', '8', NULL, NULL, NULL),
(19, '1628508593_1429565045.jpg', '1/Product_images/1628508593_1429565045.jpg', 30537, 'image/jpeg', 'product', '9', NULL, NULL, NULL),
(20, '1628507937_1429565119.jpg', '1/Product_images/1628507937_1429565119.jpg', 26006, 'image/jpeg', 'product', '9', NULL, NULL, NULL),
(21, '1628507937_1429565130.jpg', '1/Product_images/1628507937_1429565130.jpg', 32573, 'image/jpeg', 'product', '9', NULL, NULL, NULL),
(22, '1628586181_1.jpg', '43/Product_images/1628586181_1.jpg', 202116, 'image/jpeg', 'product', '10', NULL, NULL, NULL),
(23, '1628586182_2.jpg', '43/Product_images/1628586182_2.jpg', 86472, 'image/jpeg', 'product', '10', NULL, NULL, NULL),
(24, '1629032648_1.jpg', '85/Product_images/1629032648_1.jpg', 202116, 'image/jpeg', 'product', '11', NULL, NULL, NULL),
(25, '1629032649_1429565119.jpg', '85/Product_images/1629032649_1429565119.jpg', 26006, 'image/jpeg', 'product', '11', NULL, NULL, NULL),
(26, '1629084437_im.jpg', '43/Product_images/1629084437_im.jpg', 29138, 'image/jpeg', 'product', '12', NULL, NULL, NULL),
(27, '1629084438_im2.jpg', '43/Product_images/1629084438_im2.jpg', 496263, 'image/jpeg', 'product', '12', NULL, NULL, NULL),
(28, '1629438749_2.jpg', '1/Product_images/1629438749_2.jpg', 86472, 'image/jpeg', 'product', '13', NULL, NULL, NULL),
(29, '1629438751_1429565045.jpg', '1/Product_images/1629438751_1429565045.jpg', 30537, 'image/jpeg', 'product', '13', NULL, NULL, NULL),
(30, '1629438751_1429565119.jpg', '1/Product_images/1629438751_1429565119.jpg', 26006, 'image/jpeg', 'product', '13', NULL, NULL, NULL),
(31, '1629439055_2.jpg', '1/Product_images/1629439055_2.jpg', 86472, 'image/jpeg', 'product', '14', NULL, NULL, NULL),
(32, '1629439055_1429565045.jpg', '1/Product_images/1629439055_1429565045.jpg', 30537, 'image/jpeg', 'product', '14', NULL, NULL, NULL),
(33, '1629439055_1429565119.jpg', '1/Product_images/1629439055_1429565119.jpg', 26006, 'image/jpeg', 'product', '14', NULL, NULL, NULL),
(34, '1629439055_1429565130.jpg', '1/Product_images/1629439055_1429565130.jpg', 32573, 'image/jpeg', 'product', '14', NULL, NULL, NULL),
(35, '1629439055_car.jpg', '1/Product_images/1629439055_car.jpg', 164139, 'image/jpeg', 'product', '14', NULL, NULL, NULL),
(36, '1629439091_2.jpg', '1/Product_images/1629439091_2.jpg', 86472, 'image/jpeg', 'product', '15', NULL, NULL, NULL),
(37, '1629439091_1429565045.jpg', '1/Product_images/1629439091_1429565045.jpg', 30537, 'image/jpeg', 'product', '15', NULL, NULL, NULL),
(38, '1629439091_1429565119.jpg', '1/Product_images/1629439091_1429565119.jpg', 26006, 'image/jpeg', 'product', '15', NULL, NULL, NULL),
(39, '1629439091_1429565130.jpg', '1/Product_images/1629439091_1429565130.jpg', 32573, 'image/jpeg', 'product', '15', NULL, NULL, NULL),
(40, '1629439091_car.jpg', '1/Product_images/1629439091_car.jpg', 164139, 'image/jpeg', 'product', '15', NULL, NULL, NULL),
(41, '1629443163_1429565119.jpg', '1/Product_images/1629443163_1429565119.jpg', 26006, 'image/jpeg', 'product', '16', NULL, NULL, NULL),
(42, '1629443164_1429565130.jpg', '1/Product_images/1629443164_1429565130.jpg', 32573, 'image/jpeg', 'product', '16', NULL, NULL, NULL),
(43, '1629444296_2.jpg', '1/Product_images/1629444296_2.jpg', 86472, 'image/jpeg', 'product', '17', NULL, NULL, NULL),
(44, '1629444296_1429565045.jpg', '1/Product_images/1629444296_1429565045.jpg', 30537, 'image/jpeg', 'product', '17', NULL, NULL, NULL),
(45, '1629444296_1429565119.jpg', '1/Product_images/1629444296_1429565119.jpg', 26006, 'image/jpeg', 'product', '17', NULL, NULL, NULL),
(46, '1629444296_1429565130.jpg', '1/Product_images/1629444296_1429565130.jpg', 32573, 'image/jpeg', 'product', '17', NULL, NULL, NULL),
(47, '1629444296_car.jpg', '1/Product_images/1629444296_car.jpg', 164139, 'image/jpeg', 'product', '17', NULL, NULL, NULL),
(48, '1629444296_car1.jpg', '1/Product_images/1629444296_car1.jpg', 154823, 'image/jpeg', 'product', '17', NULL, NULL, NULL),
(49, '1629444296_car2.jpg', '1/Product_images/1629444296_car2.jpg', 146442, 'image/jpeg', 'product', '17', NULL, NULL, NULL),
(50, '1629444296_im.jpg', '1/Product_images/1629444296_im.jpg', 29138, 'image/jpeg', 'product', '17', NULL, NULL, NULL),
(51, '1629444296_im2.jpg', '1/Product_images/1629444296_im2.jpg', 496263, 'image/jpeg', 'product', '17', NULL, NULL, NULL);

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
(5, '2021_07_01_065210_laratrust_setup_tables', 1),
(11, '2021_07_28_092159_create_cart_table', 2),
(12, '2021_07_28_092422_create_cart_item_table', 3),
(14, '2016_06_01_000001_create_oauth_auth_codes_table', 5),
(15, '2016_06_01_000002_create_oauth_access_tokens_table', 5),
(16, '2016_06_01_000003_create_oauth_refresh_tokens_table', 5),
(17, '2016_06_01_000004_create_oauth_clients_table', 5),
(18, '2016_06_01_000005_create_oauth_personal_access_clients_table', 5),
(20, '2021_08_02_085416_create_orders_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('02cfcd9a4fe0cb6e1c5c3ac0c160af616e1ff16e755d0821a800dbc0898b2ff02d35706fb4917c61', 44, 1, 'FIAhugRCOB', '[]', 0, '2021-08-09 05:43:11', '2021-08-09 05:43:11', '2021-08-09 11:33:11'),
('031c7b67fecd08b066972815da54c94b2264f89f15be0cf70485ffec0bdda81d4796370e02a776ad', 44, 1, 'idnbf6VC9R', '[]', 0, '2021-08-14 02:34:43', '2021-08-14 02:34:43', '2021-08-14 08:24:43'),
('0320c043a1851a337fdbd2d98a14ad679cc7de9d3d4fca4602b157a24a0d8fc4979876918c930814', 1, 1, 'hUYlmbP2vJIeAslMWcQQPQqv0pkd24tDCjxRnF6HBmr4HmrVlJ8H9KURo0e8LstGJP07GYjnCKbBMJtfviI4Xi8tPRqAwdA6VXgfCjF5HEcTHTGm1mMP7Y0YntdX5X3Hj7z6JkNLcPhouNbZlxpBCQ2xGLwCWcfQBPizAtfrvDBR9JpISm5aFODh3RuVTLFngZWYjoOf', '[]', 0, '2021-08-03 17:48:14', '2021-08-03 17:48:14', '2021-08-04 04:49:14'),
('03386c5a6acebc71e8505c8d0d121e6356f4dacd705a8cdc80a66b7ca4641cec87f080e83f220a2c', 44, 1, 'tmkDVav3w5', '[]', 0, '2021-08-08 09:34:17', '2021-08-08 09:34:17', '2021-08-08 15:24:16'),
('03545e7420a63de3affb64c65b9474a45d077ddb3481a41a631f8636105e0dbfc218aaac34ddb921', 1, 1, '8gySf8wK5T', '[]', 0, '2021-08-03 17:48:38', '2021-08-03 17:48:38', '2021-08-04 04:49:38'),
('037dc2f33f077fef6900fb1ac4968078f438f2c604bfbdb0cee0126bf1edef041b9744496c3be390', 44, 1, 'l4lS1xy7Qn', '[]', 0, '2021-08-25 04:14:28', '2021-08-25 04:14:28', '2021-08-26 09:44:25'),
('045ab2895c6bf2371f29782a88304538606eca2a9f788d473bec71c9225f1e21549eb1ec8ea58354', 60, 1, 'm5MrMuaGb5', '[]', 0, '2021-08-06 22:01:15', '2021-08-06 22:01:15', '2021-08-07 03:32:13'),
('05486e6e5537fbd0658099afd6f441f6f12c072b210bb99f1e338dab7a8e356eb4a7a5f91cb7cb14', 44, 1, 'QrwlZsyDSa', '[]', 0, '2021-08-22 08:41:56', '2021-08-22 08:41:56', '2021-08-23 14:11:54'),
('065faf57a824d90bf7e49ccd285f92c6855e5573f9119a3c0bc1073a3e3de350688eadd50fa30bc7', 44, 1, 'wpv4pC7qkc', '[]', 0, '2021-08-14 22:51:16', '2021-08-14 22:51:16', '2021-08-16 04:21:16'),
('06b577a74d467c78be2ffbccc123ec5603d84263e884363f7d9dc9be647d3402876b62115a205d38', 44, 1, 'nH2Ze61ug2', '[]', 0, '2021-08-11 03:16:01', '2021-08-11 03:16:01', '2021-08-11 09:06:01'),
('0721c5ba5b53f5948414c61abd6814c21b98a2125295738ee1e10f5038b52c49d52d25de866a769d', 86, 1, 'ORWFvHQKeA', '[]', 0, '2021-08-15 09:35:56', '2021-08-15 09:35:56', '2021-08-16 15:05:55'),
('07a852d6c6423dccd015b2935ef1b9cc7c60d9cb7fd081664f465f890c8c7e8574861949078001e2', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 23:41:35', '2021-07-31 23:41:35', '2022-08-01 10:41:35'),
('084c4ddc04460f033d67ffcc534eec653449c2e3a436406494445f53de3a8f33668c1219a58095fc', 44, 1, '6bOwmRalTp', '[]', 0, '2021-08-11 00:30:40', '2021-08-11 00:30:40', '2021-08-11 06:20:38'),
('0859396bc44bfd20571235f6203ff7e7fe76d268ed20a0742371ee82368194b9e6d32d090d7122ff', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 20:25:54', '2021-07-31 20:25:54', '2022-08-01 07:25:54'),
('08f8aff1e16b3ec6c33f22ede6aba6302fe3d15711fbff588775f318f14658da9a185af79c8ca3c6', 40, 1, 'QIIgeEhQp1', '[]', 0, '2021-08-06 08:20:13', '2021-08-06 08:20:13', '2021-08-06 13:51:13'),
('098f0a94d8751ee842b1ac4a8609ef51f8e5804dea60ce31441e53d460aef5353ca42070de313dad', 35, 1, 'rDNygvbxPb', '[]', 0, '2021-08-06 07:47:47', '2021-08-06 07:47:47', '2021-08-06 13:18:47'),
('09a16a1b7559b3722a693ad316f8064f9e28ab54c1540ecccba2123e4b0b4e50e98450f7df086a71', 44, 1, 'O4LF36kWaM', '[]', 0, '2021-08-14 06:26:41', '2021-08-14 06:26:41', '2021-08-14 12:16:41'),
('09bb0566a51a45ca950ff0e316e23f7f2e9aee837f2b732bb4e6e56c679ecb26e060d9e1b356c503', 44, 1, 'RSOEGzo0EX', '[]', 0, '2021-08-14 12:28:31', '2021-08-14 12:28:31', '2021-08-15 17:58:31'),
('0a477e0124c2972001035118c2d0a8d795fab6e663da69bf77d889a4f563718c7fa2c123ceab1c99', 44, 1, 'R0qjWTA6PP', '[]', 0, '2021-08-14 05:44:16', '2021-08-14 05:44:16', '2021-08-14 11:34:15'),
('0b0a969b3e4191940f5b609f66d300b62aac185059da8fe84862cfe2ef360bfe42b5dbb7558f3c0c', 44, 1, '6ApYnu7733', '[]', 0, '2021-08-14 10:07:21', '2021-08-14 10:07:21', '2021-08-15 15:37:21'),
('0bab3f19945c1b4fbc6514dfa224fae4b0b036c900d18f0dd58af677148526ffba2db9ad6d507c3c', 1, 1, 'lyccuTsovj', '[]', 0, '2021-08-06 03:22:36', '2021-08-06 03:22:36', '2021-08-06 08:53:35'),
('0bbcf170a82d59863e99b50a1c9debe77f1685d2911703c87d20c8946161db1b1d3a1f551e043b03', 44, 1, 'Mlq2ZYMO9a', '[]', 0, '2021-08-12 09:35:08', '2021-08-12 09:35:08', '2021-08-12 15:25:07'),
('0d6514b2b56597d1a608f7fc3de7f25ed077f402294ed2c3076dd7237192e1e2bd8ec4dcd58d53b5', 1, 1, '5pn9UbJ9Kl', '[]', 0, '2021-08-03 17:51:59', '2021-08-03 17:51:59', '2021-08-04 04:52:59'),
('0e197fa1aaad912324d0f03cf6e28acf0f656db54c227a7a75cbb8aa76dce9e339740ab2cdd97861', 44, 1, 'BK0CxstDNa', '[]', 0, '2021-08-09 00:54:48', '2021-08-09 00:54:48', '2021-08-09 06:44:48'),
('0f817a076ece35e67e295d3f9d87593137c9579e4dcc70eb6a5d9a920fac755a7a1ce7dde332e507', 44, 1, 'mA8ZcoB6vv', '[]', 0, '2021-08-14 10:29:18', '2021-08-14 10:29:18', '2021-08-15 15:59:17'),
('1069c93066501ec64bb09971adeba71d67129d9f0015cb8b5d46d54ad34849eea2ecb64ad9953e2c', 44, 1, 'bdrpNQpXbJ', '[]', 0, '2021-08-08 09:26:58', '2021-08-08 09:26:58', '2021-08-08 15:16:55'),
('11414d6fc35316ad26e801a14e39d95ab27ffa4d1d8a53b4a66ceadccbc704a6b888d443fbef2718', 44, 1, 'OIuToDb9tj', '[]', 0, '2021-08-10 07:46:00', '2021-08-10 07:46:00', '2021-08-10 13:36:00'),
('12aff01e4336ac640518944fb119fa44d7a1f8047ee66aecac6250063683e1387b2929632ba52d6a', 44, 1, 'D6y5VUrOMm', '[]', 0, '2021-08-06 08:39:35', '2021-08-06 08:39:35', '2021-08-06 14:10:35'),
('15231cdc353c3be9bbb2daabd5391a2f60a661000c747376ce5ab7088d89846558837c5e7846d7b0', 44, 1, 'fViJEmaIOo', '[]', 0, '2021-08-14 06:48:30', '2021-08-14 06:48:30', '2021-08-14 12:38:30'),
('175b54636548995c7a4ad53cb1e9703aec45cef16eb67ed1674d24faf74f00d880a0424c6dfd3ac2', 44, 1, 'baXUJBkGii', '[]', 0, '2021-08-10 23:42:24', '2021-08-10 23:42:24', '2021-08-11 05:32:24'),
('186ed24246271df8d2c2b105f327aadabc512efd4d2fd8b9aa50556004491cd5221dfd48d41c0a37', 28, 1, 'my-app-token', '[]', 0, '2021-08-06 07:39:18', '2021-08-06 07:39:18', '2021-08-06 13:10:17'),
('194116e83e9f59cf2796155e83c156c147893de5e4c1feeddcb6602ec76d399aed9d3522d8638647', 44, 1, 'kdl5xFCUT9', '[]', 0, '2021-08-07 06:07:17', '2021-08-07 06:07:17', '2021-08-07 11:57:17'),
('19a32bbbb1c900b57fc983ba05275b984f0412bc40cc048209e60013928075232222617e721ab644', 47, 1, 'xc4goyB5HR', '[]', 0, '2021-08-06 12:01:14', '2021-08-06 12:01:14', '2021-08-06 17:32:13'),
('1a6b3cc5378ebbc566e1226e2bebf1b2d18ca77218fcd18c051c999649ae417401ce04e52b2b007f', 84, 1, 'oPvbo9tMrF', '[]', 0, '2021-08-15 02:23:48', '2021-08-15 02:23:48', '2021-08-16 07:53:46'),
('1a9ff8b7cf288ce15770acf10878eef00130c6cc871c13d434e055e63025d62b3dc968c5ecf690f4', 86, 1, 'DRGAifJmxD', '[]', 0, '2021-08-15 09:34:27', '2021-08-15 09:34:27', '2021-08-16 15:04:22'),
('1cb8ee417e95a2fc36f6059eebd11db37c373406f349e042216aa76043095bdca225985976a4735f', 36, 1, 'CipSixDofb', '[]', 0, '2021-08-06 07:50:16', '2021-08-06 07:50:16', '2021-08-06 13:21:16'),
('1e1a1e1afb4653fc868a44491b737d8b2845f2663f8dc49e990673752c615c34dd3f7204bc44ca9c', 44, 1, 'LQ6lju3iOV', '[]', 0, '2021-08-12 09:30:43', '2021-08-12 09:30:43', '2021-08-12 15:20:43'),
('1f72311a2c61766ddf54923628f79344a146375c05e59dde96440edca6ae9b0a9e347f5d5bed6002', 44, 1, 'CzfOSS6xDV', '[]', 0, '2021-08-13 06:37:58', '2021-08-13 06:37:58', '2021-08-13 12:27:58'),
('1f9b2888075594772e8924c566022ec989433f170cab5872cab16e56d2709df770e23bba4d0729e8', 48, 1, '1vc1Oni2XU', '[]', 0, '2021-08-06 12:28:19', '2021-08-06 12:28:19', '2021-08-06 17:59:19'),
('1fddc80858d33df1bf4c36f8d3a8d27a05042042f46c027c9f0a7a81369c4dbbe651a9c9345d046b', 73, 1, '3Gz3lsKkOQ', '[]', 0, '2021-08-06 22:24:45', '2021-08-06 22:24:45', '2021-08-07 03:55:44'),
('209733aa21f5dabd333fbb2baa656e81940d856e1f54d7fd9fb6bb9756acf5c14f7d2a1717f231bb', 44, 1, 'InaLEWjgqn', '[]', 0, '2021-08-14 04:01:19', '2021-08-14 04:01:19', '2021-08-14 09:51:18'),
('20e10c23c6b50cb070fdeea287fd2621c1fd8e852ec293f3ab52e6761ef37db36d24a12a0ead940e', 44, 1, 'enBKRlfzSS', '[]', 0, '2021-08-11 05:06:20', '2021-08-11 05:06:20', '2021-08-11 10:56:19'),
('232468dba5e0a8b83c9d85a24dab225fcb8e50cab81d3d687e505ee7a7892d4f810854252376e2b9', 1, 1, 'my-app-token', '[]', 0, '2021-08-03 16:35:27', '2021-08-03 16:35:27', '2021-08-04 04:35:27'),
('24143503041a53ef31d7b7af24fee958970ef077ef8b6e9dbd65d84b9ad7158892455343c57fea71', 84, 1, 'kGn2upzxrp', '[]', 0, '2021-08-15 01:37:48', '2021-08-15 01:37:48', '2021-08-16 07:07:47'),
('24e566fe0d01e18a5916ef9a3c6f2d18e866fbb1d291a050427995ca29d31b99d22a50ec4536370a', 44, 1, 'HrcWS9o1jR', '[]', 0, '2021-08-07 06:44:29', '2021-08-07 06:44:29', '2021-08-07 12:34:27'),
('2525a9399b7ce77eac7b7d7d0a19b30627a5956c09c949e46d44e664a90bb429ced65ea8e689edd1', 44, 1, 'gu1hB62zOH', '[]', 0, '2021-08-14 06:04:30', '2021-08-14 06:04:30', '2021-08-14 11:54:29'),
('25381f1fd4032b4f76e2fc0cab01e3726151cfecc776d26353c02a74933f04cbc16fc99c8a0164e1', 44, 1, 'vE5DPgOmrJ', '[]', 0, '2021-08-14 12:09:35', '2021-08-14 12:09:35', '2021-08-15 17:39:34'),
('25cdaed9af259134a8f5c513ed4b65f6881ead1ff97caf35afa0b99e1115eeb8b0d9c888f16ee61f', 44, 1, 'R8GrlkoGwy', '[]', 0, '2021-08-09 23:26:27', '2021-08-09 23:26:27', '2021-08-10 05:16:27'),
('27485085c3eb203092e2787184d2e8b4b3c94da37fb9ae334270a288bcf07e0084ae7e6a8d81392f', 44, 1, 'jkysiIeBws', '[]', 0, '2021-08-14 04:24:46', '2021-08-14 04:24:46', '2021-08-14 10:14:45'),
('282bd2f6441b8c09b7915bcffc269a5b4dd19a663d1ed30ed21829807b71761362d111c3d63283b7', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 22:25:46', '2021-07-31 22:25:46', '2022-08-01 09:25:46'),
('2a52a80584da609930522bafb04fe9e1d0f6abc057b6489fcf31ca8e251bdf9aef99140a66e5717b', 44, 1, 'uu08j1BWAF', '[]', 0, '2021-08-13 08:51:20', '2021-08-13 08:51:20', '2021-08-13 14:41:20'),
('2a9198ed1ab353a61f4a226bf2ac48641c3b5d9d68366c143db4f31750a7ffef3172e61215324659', 44, 1, '49XUraPyqG', '[]', 0, '2021-08-10 06:50:22', '2021-08-10 06:50:22', '2021-08-10 12:40:22'),
('2df7e45c8b6530cc2d915eee829c8f5897e3c5a935d1b3c2ff6eb8b07e78072c37148a1c8d2ae8c3', 44, 1, '1MbJgoiAEa', '[]', 0, '2021-08-13 00:06:42', '2021-08-13 00:06:42', '2021-08-13 05:56:41'),
('2f5230a7d8abd4336cdc7f8255d83fb15e2fbdccbefaffa920d5c3d3235e2a674e8352cd967e1a88', 44, 1, 'QNZrbkGFAR', '[]', 0, '2021-08-10 00:12:03', '2021-08-10 00:12:03', '2021-08-10 06:02:02'),
('2f9da7b95a6769684ab96b110eaee6dc4d10156fb1efadd5e7d50f7e39d1f62e526c982ce1ba8345', 44, 1, 'S7sjI3goxb', '[]', 0, '2021-08-14 11:53:37', '2021-08-14 11:53:37', '2021-08-15 17:23:37'),
('2feb143d2488b56afa6a4fc680e07ce1009b2cd6a6f5affa35d77066698c3ed05004af63750aa028', 44, 1, 'R6TzGRhkgG', '[]', 0, '2021-08-06 09:33:24', '2021-08-06 09:33:24', '2021-08-06 15:04:23'),
('30c76f794371199882d4153f9f5e952a92fa6f4512223c3592edee0cfb8fc62cca2dcb7c6daef463', 44, 1, 'F51MF9wNiI', '[]', 0, '2021-08-14 05:22:40', '2021-08-14 05:22:40', '2021-08-14 11:12:40'),
('30f6db5ab01c24411305e8ce6e727d30f831376eabfa888ecaaa64c38a6ddd64e5683de099fc31b7', 44, 1, 'symaBG9sa7', '[]', 0, '2021-08-14 12:09:37', '2021-08-14 12:09:37', '2021-08-15 17:39:37'),
('31b020010747d05156bbe8857293840d1fdcdea03aa92ceb2f8d4b43190c8b5d26dc50a18912f3b7', 44, 1, 'r8XyjZYQCd', '[]', 0, '2021-08-14 12:17:36', '2021-08-14 12:17:36', '2021-08-15 17:47:36'),
('323baf5d8e480f1257baa2687c12b3fd25a9f05204439c9b5eb704f394bb7bf0826b5b6835c7075b', 44, 1, 'wShNobeygf', '[]', 0, '2021-08-09 02:24:59', '2021-08-09 02:24:59', '2021-08-09 08:14:59'),
('32d6ca3d41e1d5ef507f89d8a9bf3e88649f65d53f361751e6fb086be52be37a4c0790278b4d90b7', 44, 1, 'RMl9TeddRw', '[]', 0, '2021-08-08 23:00:25', '2021-08-08 23:00:25', '2021-08-09 04:50:24'),
('3421b264014d31c9fc2d52671612e14813232203eb08fe4767e07c12de74e6e6b2b871ea7794506f', 44, 1, 'VJdSaDoYgl', '[]', 0, '2021-08-14 23:00:20', '2021-08-14 23:00:20', '2021-08-16 04:30:20'),
('3591141a2394cf96599b506cdb0752ee7987fe5f4196288d7a7e159666946928f29aa4b194a49f3b', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 21:32:44', '2021-07-31 21:32:44', '2022-08-01 08:32:44'),
('35b39aa502822c9b424a31677991a757a46c97f68a38c31f3c6b7bd8234469975d5d9d0f417245c9', 44, 1, 'hYTaf4eGMc', '[]', 0, '2021-08-15 22:07:10', '2021-08-15 22:07:10', '2021-08-17 03:37:09'),
('35c9d64a130bbf4d6d589be405258e06b2f038e3ddcf53f9620af791a366f4d9e987772c783ad296', 44, 1, 'FSnm9R82gO', '[]', 0, '2021-08-13 09:13:34', '2021-08-13 09:13:34', '2021-08-13 15:03:33'),
('3899f3ea71c7f014fda70625c7dbdb70700b58a249b0d2bd80210a0f11fc439db466a3df991f6a54', 44, 1, 'n5JZSgpYAH', '[]', 0, '2021-08-09 02:45:29', '2021-08-09 02:45:29', '2021-08-09 08:35:29'),
('38b33aa25912ba5c9e5296a69b819dffecdd40b91426365e3a9d974042fdbf3ac91b2a6707d2eb7c', 44, 1, 'AiJ6p3Iqji', '[]', 0, '2021-08-08 23:35:26', '2021-08-08 23:35:26', '2021-08-09 05:25:23'),
('3a0e44adb56784491fe4375917a11d11b75bb0c7675c5c8b74385bfe2f316567ea189ccd033b478a', 44, 1, 'k6eSfHQayy', '[]', 0, '2021-08-09 22:27:16', '2021-08-09 22:27:16', '2021-08-10 04:17:16'),
('3b0354ec6043ba0ab3543b31b0feb02b2898efdc75283d010a4f9b67b0bccb382e5b54c7723c2504', 44, 1, 'DP3TSTvh3w', '[]', 0, '2021-08-12 09:39:26', '2021-08-12 09:39:26', '2021-08-12 15:29:26'),
('3c40674bef89ac6ef3c0d78d111ecf1659a8231def43e7831753f86ad9014fcd59183b0d26a50188', 44, 1, 'O7TCI8zwmO', '[]', 0, '2021-08-10 04:08:09', '2021-08-10 04:08:09', '2021-08-10 09:58:07'),
('3da5cdbb9e95ba3a13623df546a26c7dbd2e8b507846566f71eff0bb87ea8c2e27df44fabe985a37', 44, 1, 'iVB8RgGdSA', '[]', 0, '2021-08-10 09:31:17', '2021-08-10 09:31:17', '2021-08-10 15:21:16'),
('3e572b9d493212d614aca6d973ef7feba4c817b5cebe76652c2f83c2fc38c2a8b7599bd62190770c', 44, 1, 'JK7SqrPHZB', '[]', 0, '2021-08-08 05:17:28', '2021-08-08 05:17:28', '2021-08-08 11:07:27'),
('3eae92dff4bcd0e620c5da6601a3294865286d71e46ef256f6230dbbe56e17ccb7083c2224e00f4e', 44, 1, 'xuVi8HMvZx', '[]', 0, '2021-08-07 02:55:59', '2021-08-07 02:55:59', '2021-08-07 08:26:58'),
('3f707d96b037e803a97326c14eb4e2a1733737f2cbf1626954c5217c8d671bbb9ec7a1417a4b8483', 44, 1, 'UCvnOIO2d0', '[]', 0, '2021-08-09 08:36:26', '2021-08-09 08:36:26', '2021-08-09 14:26:26'),
('40d2488477f36c3b30b0d2449f75f6cf3a3e55be7fb5ec466fa00ce16a4b93e9b6896d47774fefce', 44, 1, '0gmENOOxNG', '[]', 0, '2021-08-07 07:24:17', '2021-08-07 07:24:17', '2021-08-07 13:14:17'),
('40daaecba3c374f2c5cbc2515fb1272a8e1fc51d6a2a01e04526ba70a68ce46b526387a0630a4e62', 44, 1, 'v6LG14d330', '[]', 0, '2021-08-09 02:03:38', '2021-08-09 02:03:38', '2021-08-09 07:53:38'),
('40e2927473ed682b625f77b90d2b407cb1f689ef8afbf54ef64a788a29ca1b6d8d814740befb28a6', 44, 1, 'KhzNcSHcrx', '[]', 0, '2021-08-07 03:59:50', '2021-08-07 03:59:50', '2021-08-07 09:49:49'),
('4134240f8675508f07d927cff8759225ea02423475a6651c7497b20e5afca7d476625249a29b1b8b', 44, 1, 'Fn7wLSWucm', '[]', 0, '2021-08-09 03:49:42', '2021-08-09 03:49:42', '2021-08-09 09:39:41'),
('41432d196845cde5d4cc3e761c25a92c125bf04871d24f171d856a7f52893d1a100920d7b377434a', 44, 1, 'r6vClm0HUi', '[]', 0, '2021-08-11 01:44:24', '2021-08-11 01:44:24', '2021-08-11 07:34:24'),
('41ad6bec56bc5202c609c45ab62093f353bc68db6dcf43d24ba64f6c7779ea0fb25af1a5c14beddf', 1, 1, 'my-app-token', '[]', 0, '2021-08-02 21:51:35', '2021-08-02 21:51:35', '2022-08-03 08:51:35'),
('4249fb8ec28db4eb6dcd6aab487d3c3638dadca2a26d94e96c5d52885ecafc707fd3dd04e7f64421', 44, 1, 'aEh3S3G2ds', '[]', 0, '2021-08-14 05:20:55', '2021-08-14 05:20:55', '2021-08-14 11:10:54'),
('42fec2d9588881a9da2046a08a179872ba1e9905dc7956e735ef5cec4caba13ee9ecb9c8eff4ba78', 44, 1, '61nGcpWTxa', '[]', 0, '2021-08-07 03:07:09', '2021-08-07 03:07:09', '2021-08-07 08:57:09'),
('43ed9469ddfd30194f8e3c86c83c16a7f13bbc7e3a5fda0142cdc38f74d9faca253ce6c1935dcc33', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 22:12:25', '2021-07-31 22:12:25', '2022-08-01 09:12:25'),
('440034f66a99a4b2648ddd085d90e156806d27db7a73a81a910cb33b4db05b999fdc71762d08b8ab', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 22:21:23', '2021-07-31 22:21:23', '2022-08-01 09:21:23'),
('4476a140b09e0b561bcced283c94ce83d8f20f4e92f189b7a3932564506f35cb77c8f90818ae9c6c', 71, 1, '1o2DccfHyI', '[]', 0, '2021-08-06 22:20:43', '2021-08-06 22:20:43', '2021-08-07 03:51:42'),
('468b710d8fd50ec18d827088dce546755d1a73e719081b6d26d427aadfee2c99c87fc3d72fd8568b', 44, 1, 'ZaJjn8GRXv', '[]', 0, '2021-08-09 00:28:46', '2021-08-09 00:28:46', '2021-08-09 06:18:46'),
('469f49601e86c4c1954ba5e0dbf1d22e473da975197b3f62298f198e4051e7bd2a13d970f8ba2d20', 1, 1, 'my-app-token', '[]', 0, '2021-08-03 16:32:00', '2021-08-03 16:32:00', '2021-08-04 03:33:00'),
('46af7b37d488f76ce97370231fc7a02ab0768bbfc0b46efc34ba91ffcb9d0d44fed1216a30353e9c', 44, 1, 'eHiA3Wr98s', '[]', 0, '2021-08-14 04:45:41', '2021-08-14 04:45:41', '2021-08-14 10:35:40'),
('48387d7379236f8437a0c9bf1872a08fc1452af488b2c0dad1fd2389ba8b805758336fb7aa5ccd94', 1, 1, 'SXYa9qqOeLO7wACdK7DmgymWoizTP2lj5vlWQSEk47kBY2bqc3CYglQqRQhF2eXBWLpoziFtIuURvLPdVYqhIvHNyyiJzPZFXh1pUuHSenSzmSACD0YCkJKTnbbgFGbpep6BOW1c3BvcMZwU0miQOXctlMhzhxOTgwCkMxnW4kEJpm5Uje9dtENb8O3dc5nU9749SMCK', '[]', 0, '2021-08-03 17:48:10', '2021-08-03 17:48:10', '2021-08-04 04:49:10'),
('490d8700a9e4baa15f96a02fcbd57ec7cf7c0b2a4ab9bc2f9a38f81ed8c7ffd28fd906882d96d8a6', 44, 1, 'MCQOCg5uY0', '[]', 0, '2021-08-14 02:13:55', '2021-08-14 02:13:55', '2021-08-14 08:03:52'),
('495f270d16d45971349fe4d3132b90b88f594a873fdc965f8e84c05e6253645b7c9c274c6ad04b84', 44, 1, '8Jtv3gQuMt', '[]', 0, '2021-08-14 10:19:41', '2021-08-14 10:19:41', '2021-08-15 15:49:41'),
('4a2ee32ad05f8e0bafdf6534d2dba52339a967266d98c89d338c9933dd0185ebb9225e5211811f71', 46, 1, '3PyXfQiLUn', '[]', 0, '2021-08-06 11:17:57', '2021-08-06 11:17:57', '2021-08-06 16:48:55'),
('4a4b5fb92dc1711784c3ee8f062587e38fc369f39d9392f75637de658f45583040ae9c46d2c43962', 44, 1, 'DIJa7SGMRG', '[]', 0, '2021-08-15 04:14:39', '2021-08-15 04:14:39', '2021-08-16 09:44:39'),
('4ae77c20554e6fc9a3c3e83dd3999e6b2944cdc276ecb70f0ae5ee023068d3bd11ca0a6af9f44706', 1, 1, 'my-app-token', '[]', 0, '2021-08-02 22:24:19', '2021-08-02 22:24:19', '2022-08-03 09:24:19'),
('4b33703f34731f2ffb4cbbf6f239a75ffa76dd2ec760e12a09dd3fac205eb287801123dd6c3f34df', 44, 1, 'XRkA5x91Uo', '[]', 0, '2021-08-13 11:32:25', '2021-08-13 11:32:25', '2021-08-13 17:22:24'),
('4bbed491bc94ba832aa556367406d777fcfc26dae359d33d4b83f5d41d7ddfe36fe63a4079845bd8', 44, 1, '7pg0on14Tg', '[]', 0, '2021-08-12 06:10:02', '2021-08-12 06:10:02', '2021-08-12 12:00:01'),
('4ead14d1c1b980931c3657691981ffad661bff9ebada0e6d81631f85d6d1044041c4a3d8ffcef1cb', 44, 1, 'AMuuTNWDhf', '[]', 0, '2021-08-19 00:24:03', '2021-08-19 00:24:03', '2021-08-20 05:54:01'),
('4f72ac0a545b07b8e1bf4c7a9ba8d5a0aaa7c884b82779daf2ea6f3514b16f209470c9dcc430de7f', 44, 1, 'J6kij2yVHU', '[]', 0, '2021-08-13 08:50:11', '2021-08-13 08:50:11', '2021-08-13 14:40:11'),
('505294db9991c89525a31693383f9474a593479963b1e37c13bf6e5f5be6435879d55bd9cda13b8e', 44, 1, 'P1U0pRIg4u', '[]', 0, '2021-08-10 22:43:01', '2021-08-10 22:43:01', '2021-08-11 04:33:00'),
('50ec11811020476eef32163d4a20092573132bc4dd87fb5cfde41eae205d75a302651ef74b482368', 44, 1, 'DR9cR99wk0', '[]', 0, '2021-08-12 09:29:21', '2021-08-12 09:29:21', '2021-08-12 15:19:21'),
('513cf468f212672108d636b56acabdace37e5fd9dafc81d1ee2a5b836af5f27a1561dcadeba32d84', 44, 1, 'zVEMia6ZmR', '[]', 0, '2021-08-14 04:22:44', '2021-08-14 04:22:44', '2021-08-14 10:12:44'),
('52f724e74109683faf77bbe0696194c39e6daa0d8e59dcd61353f3c8bab4f0a036ca3a40176a93b0', 44, 1, 'RT4UnRhRU4', '[]', 0, '2021-08-18 04:56:58', '2021-08-18 04:56:58', '2021-08-19 10:26:56'),
('530be56ba8f9e33bcfeb1722a70a8f2157aaa4ba94ccbaf7103fae48a07d89bf04d1d519a484dc40', 44, 1, 'obxa4XgN1R', '[]', 0, '2021-08-11 06:19:43', '2021-08-11 06:19:43', '2021-08-11 12:09:42'),
('53353eb74445551f78534146d1679927e77480a39a4c4ca14c3b94ac0c5b8a20b30c2f48ca65a0dd', 44, 1, 'MeskdcIOcp', '[]', 0, '2021-08-14 10:15:56', '2021-08-14 10:15:56', '2021-08-15 15:45:56'),
('548add49ffe759c4bf2ace9bdee2b121782e6b8b2fca3baa968019ba646da3e05843dcd74e348f26', 44, 1, '5gA28uXWCe', '[]', 0, '2021-08-12 09:34:12', '2021-08-12 09:34:12', '2021-08-12 15:24:12'),
('55b801d4929cf6efb05a501f9089292b74dfbbbf4de1a799a9a8923e84b1820cb23376d7671f7bce', 44, 1, 'ZBWpaZwYAQ', '[]', 0, '2021-08-10 22:18:20', '2021-08-10 22:18:20', '2021-08-11 04:08:19'),
('5676f52ed6e748545437001a5ee9625e81de2ac20bbdb07ebae380c17f99e330d691f34ebe720ba6', 44, 1, 'Zu2duNo09u', '[]', 0, '2021-08-13 07:10:47', '2021-08-13 07:10:47', '2021-08-13 13:00:47'),
('57250c2837f096cf244787489db29919945650e3c50f9701a785e1c867ee73939944ef1b992d5b8a', 44, 1, 'qV2ngsvcPy', '[]', 0, '2021-08-08 08:57:03', '2021-08-08 08:57:03', '2021-08-08 14:47:01'),
('572c0f2439bfda46e7e9e5c4bc02ba14df268043d6a797e9cd08449b28d5ac969942889fd671af97', 44, 1, '1bNjnXhqmj', '[]', 0, '2021-08-15 02:21:36', '2021-08-15 02:21:36', '2021-08-16 07:51:35'),
('57b5a69e2d8e86f4651e601e6e659a663e1d4bd0b6b2b8c68f2a32f5575363c065de67f26bca6ecc', 44, 1, 'XgNGUBAINq', '[]', 0, '2021-08-12 07:56:32', '2021-08-12 07:56:32', '2021-08-12 13:46:32'),
('5844f50b3ed80080acec47d533b99e013219d68adffb40b7ae13e9618999471c2a7910fe121590dc', 44, 1, 'Isd9SeGXFO', '[]', 0, '2021-08-13 06:20:34', '2021-08-13 06:20:34', '2021-08-13 12:10:32'),
('5881f21e85414f8309dd68892c9cfb8709f1bf8528c5f51faa687f6e67e781fced877459719fb27e', 44, 1, 'yl9sbxFU6z', '[]', 0, '2021-08-07 06:11:37', '2021-08-07 06:11:37', '2021-08-07 12:01:37'),
('5ab3d2c32ff3113ad8800f0326545b92c4246079206a8a10a94616057e33413e29392bbd96bf7d9b', 44, 1, 'NMa8JYiJTy', '[]', 0, '2021-08-08 01:19:22', '2021-08-08 01:19:22', '2021-08-08 07:09:19'),
('5afe9f0437182be81f3f1c0093ab4c5a93158f8222ac372b9e9827ed8ce558d89ee86020efd4e518', 44, 1, '0IODQVdnQ6', '[]', 0, '2021-08-06 09:16:17', '2021-08-06 09:16:17', '2021-08-06 14:47:15'),
('5be71e3597592bce46b9a1ceaea182339caf2aaa45e3c49cde7a22f090017cd9f451cf4a53f665e6', 44, 1, 'bvI5mbG1QF', '[]', 0, '2021-08-14 01:45:20', '2021-08-14 01:45:20', '2021-08-14 07:35:18'),
('5c8b643449b669def8d116aa91c10079ae5e4f8488b5115105c39dab4c6227bdfe3abb92f71d5cae', 44, 1, 'OdFVNE5auU', '[]', 0, '2021-08-09 12:15:28', '2021-08-09 12:15:28', '2021-08-09 18:05:28'),
('5e688ba978fb658a25381f47487569dba9a67404041e41111167f2731f9095040f413f3ee46bc02d', 44, 1, '2VsQBLwjUq', '[]', 0, '2021-08-11 03:49:28', '2021-08-11 03:49:28', '2021-08-11 09:39:28'),
('601a6cd8336b7db95f417dfd10397ecb58014d6a996f05cf6f9793edfaf70b009806923cd4a41b0b', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 23:49:06', '2021-07-31 23:49:06', '2022-08-01 10:49:06'),
('60e66f548eb6603ccf9ab08ec5bd60aaf118a5708204be08ebdbf143fb9a60d297a66cd0126f5ed0', 44, 1, 'nFOkJb12SB', '[]', 0, '2021-08-09 01:42:12', '2021-08-09 01:42:12', '2021-08-09 07:32:12'),
('60ed52a153eb2d95b9238e072233c61a3eb8abc08a96ba7513e2af0019356065fbd968baf2a13758', 38, 1, 'JnWS8erleS', '[]', 0, '2021-08-06 08:13:31', '2021-08-06 08:13:31', '2021-08-06 13:44:29'),
('62daf67602fa404d48d4076772f342524372315e16c52c7da4bbfdf2d9709e375b320029377a32dd', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 22:23:25', '2021-07-31 22:23:25', '2022-08-01 09:23:25'),
('632a9efce764af437886813f8699ae585c63db844ae842535fbd55489bbb25b0388f9bbeea055cfe', 72, 1, 'F18dH3SY1o', '[]', 0, '2021-08-06 22:23:28', '2021-08-06 22:23:28', '2021-08-07 03:54:28'),
('64993a264aba08d6402d2ffc5d059b8d1dd480b8fce28d45c7b31c07a92c7028eb431b0016cb7176', 44, 1, 'tHnasxqYR4', '[]', 0, '2021-08-08 08:14:45', '2021-08-08 08:14:45', '2021-08-08 14:04:44'),
('6537196d37198b73ac7f6c20528d3d1cc1f79852203d66dd8e68bc5d964058cc752d7149cd8d56d8', 1, 1, 'my-app-token', '[]', 0, '2021-08-02 22:33:21', '2021-08-02 22:33:21', '2022-08-03 09:33:21'),
('66cd77e68387a2157e91af70dcf183e5c198eedd0a13568c9d9ef882331be9ed7812bcabae1a26a7', 44, 1, 'n5FpR0q53t', '[]', 0, '2021-08-10 23:08:10', '2021-08-10 23:08:10', '2021-08-11 04:58:09'),
('66e9166eba058053bc565504f6a2338226e12b420aa5d504b78c3df2afe5638d2de323052b9d86b6', 1, 1, 'my-app-token', '[]', 0, '2021-08-01 19:56:21', '2021-08-01 19:56:21', '2022-08-02 06:56:21'),
('68b2a6fab9a8e2f4c906e38babfbb9ca6323f2f3a072500427d847abb11b88eecd152db920aed991', 44, 1, 's9jgaBYBtZ', '[]', 0, '2021-08-14 12:04:18', '2021-08-14 12:04:18', '2021-08-15 17:34:18'),
('6901b448de41d190020ee5a0c96da98376a16ad988bbb15497a7a7bc17900faff7d497a9dbbc9544', 1, 1, 'u4345FOVtsuz3NqcHPV9b9iXwAR8SMcSWTQosOqKr5QKpP7eGnDthXXTg1mBHcwhhVQNvhsld73ecYSdmJM9ZWDJk6bRTM2vcV54zvnFFiew2XRDjBB5Rctr6qsR2q0vZbbdGWakoIIjnO6BpB64dMbZaO9PzOCZEmfrekpq1eK4C6LtWV6nxSxr8s4bv6A8c5xQ1HDW', '[]', 0, '2021-08-03 17:48:17', '2021-08-03 17:48:17', '2021-08-04 04:49:16'),
('6a5a5cd2acd665406c0d8ab6d98d20fa7d47dcf78cbe04499e43362e517aeeb856bd3821c22cb95d', 44, 1, 'VQ9wZzKSak', '[]', 0, '2021-08-14 06:08:07', '2021-08-14 06:08:07', '2021-08-14 11:58:06'),
('6a5b48990063c1fe903ad3c0087a316f4d04018bd1947f5fad6139feb2bcbdedb714221944f19482', 44, 1, 'XOM0rkzrCk', '[]', 0, '2021-08-14 01:58:58', '2021-08-14 01:58:58', '2021-08-14 07:48:57'),
('6b22c1a7262dff58584badba2a198cc875f91efe0fec42568bf70fc7324dcb1ffbf151c82b5ae638', 44, 1, 'nWGCdODI9g', '[]', 0, '2021-08-14 10:22:09', '2021-08-14 10:22:09', '2021-08-15 15:52:09'),
('6b444fc59e7c07517e09ad65f541285b29775b1bd33a8c2a5e2d60d2d6f6f0ea18716731bbafd081', 1, 1, 'my-app-token', '[]', 0, '2021-08-02 21:40:49', '2021-08-02 21:40:49', '2022-08-03 08:40:49'),
('6ff375ad021c8df5914b732884e8d8ed1ebe46413644545b0d720ce9c0115cf3c844271b0aee57b0', 44, 1, 'miX45MsjU4', '[]', 0, '2021-08-11 04:01:29', '2021-08-11 04:01:29', '2021-08-11 09:51:27'),
('70259f507643bb228ea2bf84d6dd107a8cfb3905ce919d198b8c82248dc37cedcd9cb04e746b9f5c', 43, 1, '6YNgo3cyWa', '[]', 0, '2021-08-06 08:32:32', '2021-08-06 08:32:32', '2021-08-06 14:03:31'),
('702fa2a246f3a60ba79831397b546c3a5a5599e3e49908004d66c5c2bf45570bc4868137a2428ea2', 44, 1, 'QeoJpCRUXW', '[]', 0, '2021-08-12 08:56:27', '2021-08-12 08:56:27', '2021-08-12 14:46:26'),
('7092b166707fe1043feaf326de002976f01c941e62a25861057ea84ef19b68124a02cdf6c8079d48', 44, 1, 'Ajiwisx0Fn', '[]', 0, '2021-08-10 05:15:55', '2021-08-10 05:15:55', '2021-08-10 11:05:51'),
('717122cd6c188d07c096b3f79fdc93506a381ef9c8b8d8be3b14b922879c6caf4dd8c5d0a5b27da1', 41, 1, '9vj6nuf2KX', '[]', 0, '2021-08-06 08:26:31', '2021-08-06 08:26:31', '2021-08-06 13:57:31'),
('72ff2f59a8071ce497b5911eeacdd5df5cb0894f73a98396416d32f851cc41cf75b7b51d68b82982', 44, 1, 'vAOp0WWPB6', '[]', 0, '2021-08-07 02:49:49', '2021-08-07 02:49:49', '2021-08-07 08:20:49'),
('73a746461c02ebfadead890f66d2a5a0753d9e2b48a9a734eb8e98b05e05a099df094ba4fc6ec2c6', 44, 1, '5FLg5KdHOl', '[]', 0, '2021-08-12 07:19:13', '2021-08-12 07:19:13', '2021-08-12 13:09:12'),
('742362cb1d14bc508221ec90719bb2d74658c3ea4094179e05147919f5d2dbac825a514b9424c0b7', 44, 1, 'LTbej1EiFN', '[]', 0, '2021-08-15 09:30:40', '2021-08-15 09:30:40', '2021-08-16 15:00:38'),
('77567111148f4be37c634c69d03adb2fed8cb2f05077936d465b0e811e1fbac8fd5ec9edd4653e1f', 1, 1, 'my-app-token', '[]', 0, '2021-08-03 17:12:47', '2021-08-03 17:12:47', '2021-08-04 04:13:47'),
('782940834d854a9790a998136a24aa156fcea145fe70ec6dafa8efac46cc5738026656dbf7e236e2', 44, 1, 'rKjxLEKCR0', '[]', 0, '2021-08-06 23:36:04', '2021-08-06 23:36:04', '2021-08-07 05:07:04'),
('786e77843544f87c8c59d8557a8ad64c8443a621712aeac9d5ad2ac9292d968bfe54e73a98a13434', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 20:47:38', '2021-07-31 20:47:38', '2022-08-01 07:47:38'),
('787b10970fe4af23988a7522ab5bf8a89e1d68034ad96d2d0388ddf814f77565570f7f25cb248db7', 1, 1, 'my-app-token', '[]', 0, '2021-08-03 16:34:17', '2021-08-03 16:34:17', '2021-08-04 03:35:17'),
('7a213296ee368c2ce21f27678ad786c5976860a5b0c28bac10a3ae09c539b1fa6b703943acebc3a7', 44, 1, 'ohGtaJcwUs', '[]', 0, '2021-08-13 07:08:08', '2021-08-13 07:08:08', '2021-08-13 12:58:07'),
('7ace7b1db5448da202c2f3de70537397e8999ee5567f0750b14abac803d2d56938f18f276e0707de', 44, 1, 'ySF8DmPxOt', '[]', 0, '2021-08-08 11:28:22', '2021-08-08 11:28:22', '2021-08-08 17:18:21'),
('7adb2fa5062c23bbaa869d36c00124b5f1dc918c1cac5795c6d609656e9e79ec921e574590595e04', 44, 1, 'NCHr1Kh3mG', '[]', 0, '2021-08-14 10:23:12', '2021-08-14 10:23:12', '2021-08-15 15:53:12'),
('7b7d76194749d3fcec23e992c2cff00bf42b84f6ca1d9f2e7f99ae04bcbcea796322c810a220a67d', 1, 1, 'ZaViZjZcVEzZpPq0xL68owUqz3T3ggGlGkRjWkO7nJylxak182lqRs3IVt35XYer3hjRlnHQNT49nuWt7HjBkpDND100gFZYE9LH1CqZueUm8Sgbl1OLIGdnO5oKdXgIVv5PHkFAniYsNa36oZIQc15AIHgGcIg7m5fzlQaknWfRUSsTx2rzcbzxQxju7QiCzhZfKMWS', '[]', 0, '2021-08-03 17:48:01', '2021-08-03 17:48:01', '2021-08-04 04:49:01'),
('7b93dba4accad214179b4d7019f663e3eff5bb45f58cd3fa92c25239e6f172667ec70ab87d35dac1', 39, 1, 'BDF26lhSpZ', '[]', 0, '2021-08-06 08:17:17', '2021-08-06 08:17:17', '2021-08-06 13:48:17'),
('7cab81cadf3694789d67ac1e2000bae80721b991e90697e9d1746c5eb80905cfa775af2ef0f28ba8', 1, 1, 'my-app-token', '[]', 0, '2021-08-03 17:39:09', '2021-08-03 17:39:09', '2021-08-04 04:40:09'),
('7d4e5cf0e842767337357ad79e0384ec0886b7b40bb312e425add6e5220138d2b901c7582071a6c1', 44, 1, 'aveDzhyfwv', '[]', 0, '2021-08-11 02:38:33', '2021-08-11 02:38:33', '2021-08-11 08:28:33'),
('7e6d4aeedd63adb9b59d842e7df6e6d9171f36e14e31a3fd1fb3f6ffb2d33d390bd2395a2d125df8', 44, 1, '2BugiYlV1m', '[]', 0, '2021-08-14 02:45:46', '2021-08-14 02:45:46', '2021-08-14 08:35:45'),
('7ec01c596eed1e9531e993de0f3e2d9737cfa0ad87686bf211be0d8fd5ea29902d0731813413572c', 1, 1, 'my-app-token', '[]', 0, '2021-08-02 22:39:04', '2021-08-02 22:39:04', '2022-08-03 09:39:04'),
('817df31d7aecf94d9145135f76e568ab7fd00904b887d2ba8a5bb51365690ce2c99bedc4cb89480a', 44, 1, 'y1mnjyITAj', '[]', 0, '2021-08-11 00:32:43', '2021-08-11 00:32:43', '2021-08-11 06:22:43'),
('8280783914dc9a20e01347deacaf829ef55ba60b0f79aa0023dc756eb9623b604dee4236e3ef90c2', 1, 1, 'EDchiTSkEqxKdUzOzijl9Rt2cIr0dwaFrA6igpj7P0pj5uq7x48iRkadwjclecCmbfzJSqQWz9zmFamEOOecbUOVg1ANM4q2sCGSXoadxvBQBWzNvoVMYrva5pvO8wTngKwWwArmf9DpPvgq1K3pk5juEZERRsmyCIjc8Y1Pjo7rmewlFOp5pv8S6c8f9YM7TMKWwsf2', '[]', 0, '2021-08-03 17:48:06', '2021-08-03 17:48:06', '2021-08-04 04:49:06'),
('84699964dbee7a6605882081f2bc8d08a8bc09b8572b53e031de9aab6338615c4d12a4e72deaaebd', 44, 1, 'oTCOHnqjAd', '[]', 0, '2021-08-08 08:14:47', '2021-08-08 08:14:47', '2021-08-08 14:04:47'),
('859b5c6cea5aa5bc74c0c50292fa66a2944c8e5a709256f260388dbf9d614e53eed7e049d4baec4a', 44, 1, 'BTNCoyVNm3', '[]', 0, '2021-08-14 11:53:17', '2021-08-14 11:53:17', '2021-08-15 17:23:17'),
('86a13d9d2166de26c17b5ee4413be519cfa770f2005a6a522d007f45031bc42612b0879170bc39d6', 44, 1, 'H5EHbnkkc6', '[]', 0, '2021-08-07 02:46:06', '2021-08-07 02:46:06', '2021-08-07 08:17:05'),
('86f381ef74b1986b56f1a2146554e585253b9cc87cf2aa409f17a0f71e8ba27c1400f78320f6f977', 82, 1, 'dU3aHc7jXH', '[]', 0, '2021-08-06 23:11:43', '2021-08-06 23:11:43', '2021-08-07 04:42:43'),
('887f1c48f4d293f65fc499f10de9e3736fb9b4390128f267c3b07494e055cfcee3bbf55b4d9ed374', 44, 1, '3KtHtakh9c', '[]', 0, '2021-08-07 06:08:05', '2021-08-07 06:08:05', '2021-08-07 11:58:04'),
('8895e054b596efa08f877384453c8ab02fb42f1de033c2e381b19528744de8e35931dfbbe473e0d6', 26, 1, 'P21YQzIwaM', '[]', 0, '2021-08-06 04:19:25', '2021-08-06 04:19:25', '2021-08-06 09:50:24'),
('88ae48d8d5b75d099c04a907b3a1e9f0c29fba543a43f48e0b8dc16f47dfc316698b51809a3dd227', 44, 1, 'WTdHjiGMiT', '[]', 0, '2021-08-07 03:03:30', '2021-08-07 03:03:30', '2021-08-07 08:34:30'),
('88b71a8249a9f505425eff606fa324fcb11016b0338285af8a336b2e02520ef0677ae73a4a955a98', 44, 1, '1nG1fhwayX', '[]', 0, '2021-08-14 03:00:17', '2021-08-14 03:00:17', '2021-08-14 08:50:16'),
('88b979c0bbe9f181da7b4fb0432d7c04094e8041464c5f0ae2c0872b1d1fbe1d1ae40fba8bfac275', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 20:25:50', '2021-07-31 20:25:50', '2022-08-01 07:25:50'),
('8975bc4a42a865483787804c047e35c0fe679879e666aa5fcae31947f37f4a00336c1975d692733c', 44, 1, 'koTZSwa2IT', '[]', 0, '2021-08-12 07:20:23', '2021-08-12 07:20:23', '2021-08-12 13:10:23'),
('8a07377156ee620d3cbdeec570951817d87ef4018badeaf950245aed1a9ce6e72a5015ddac31e90e', 44, 1, '41wsl4BnJH', '[]', 0, '2021-08-12 06:32:49', '2021-08-12 06:32:49', '2021-08-12 12:22:49'),
('8b316577267a9c5e755801fd00da84870ca4af911c0fc25b72839e33d044eec7f144627f74380f4b', 44, 1, 'RYJD0yLA9N', '[]', 0, '2021-08-07 03:00:16', '2021-08-07 03:00:16', '2022-08-07 08:30:16'),
('8b5bda22da3db2b92dfa85e7445696b013effc9454c88320e984d1b8df5ae19a044b7e424539dbd5', 1, 1, 'my-app-token', '[]', 0, '2021-08-03 17:05:55', '2021-08-03 17:05:55', '2021-08-04 04:06:55'),
('8bb568e271202ea2ac07de3617cc40a16ca22219154a5b90609ab651a53eefd824572592e789d451', 44, 1, '9OV0ID6xnj', '[]', 0, '2021-08-15 07:36:40', '2021-08-15 07:36:40', '2021-08-16 13:06:39'),
('8d6a2b6e760268aceff98c4bf0fd4db316d75128abce99a4b497430021fc71873697d2dad99344a6', 44, 1, '2iwKYkOSLG', '[]', 0, '2021-08-13 11:32:24', '2021-08-13 11:32:24', '2021-08-13 17:22:23'),
('909fb67e4f75b4d2049011e86dcc21fd2b0e4ceec6f7b37d04c67f6a08b6f2cc39a497a3741c289b', 44, 1, 'py4ZkEJ7TW', '[]', 0, '2021-08-07 06:10:27', '2021-08-07 06:10:27', '2021-08-07 12:00:27'),
('919d0913c95cbe2caa823b215373ed428582371703775421e8b2943c1403ec57ffe5b197ef3f291e', 1, 1, 'my-app-token', '[]', 0, '2021-08-03 16:38:51', '2021-08-03 16:38:51', '2022-08-04 03:38:51'),
('9281fa8505503e61c62a7a131bae41338d0e28771ba9c52bdd88317a1d4941d47d31fc2a2978efa8', 44, 1, 'UyKXd7dT1r', '[]', 0, '2021-08-08 23:56:57', '2021-08-08 23:56:57', '2021-08-09 05:46:54'),
('92a9ab0ac46630f750f4b8ca6a8c6ae286f17457a9d155013e7a3df8be5eab0bf5ca4550a0457d73', 44, 1, 'gxPRXtFWaD', '[]', 0, '2021-08-14 05:04:38', '2021-08-14 05:04:38', '2021-08-14 10:54:38'),
('92bd9554c9d6b504f1418931f129834aac24aaf5ecb50f9894e0140d880b8ac0ebbc6e6b21d76d40', 44, 1, 'fs4QaHO9TL', '[]', 0, '2021-08-09 22:59:38', '2021-08-09 22:59:38', '2021-08-10 04:49:37'),
('9317845353a6275b9c89ba8b1e9ee22d93281fef6cbe85aade6dd49d24d7ed79a3db1a075ef1372d', 44, 1, 'hj4dPebr0L', '[]', 0, '2021-08-07 06:15:41', '2021-08-07 06:15:41', '2021-08-07 12:05:41'),
('947d01b27b1b806567a34fce1a418ecf8be0d16c41b2a68e584a9cbd0b289f1882d3ab00ae9c9a58', 80, 1, 'PsVCzDlZca', '[]', 0, '2021-08-06 23:07:36', '2021-08-06 23:07:36', '2021-08-07 04:38:36'),
('948c6aaeef59a201eeeea511bc1c48cc22e645ccb21618b1cf4d39ad97f2572f39b9edb10556279d', 44, 1, 'MWiSUtkoJh', '[]', 0, '2021-08-14 06:06:01', '2021-08-14 06:06:01', '2021-08-14 11:56:00'),
('9498459bd66cbbfa7a3f352a38701dcbeb4cf0265dc4b62889aa02aaa617763a79a65c511dd4d9e2', 44, 1, 'BAbaPOeWQF', '[]', 0, '2021-08-11 02:25:41', '2021-08-11 02:25:41', '2021-08-11 08:15:40'),
('973bb73820436bad9f2ff4fabbcdc80625f9ceaf73ac38d306f38c1500fc251bff1e6e7bd7205f24', 44, 1, 'od0YrYXuaV', '[]', 0, '2021-08-09 23:50:28', '2021-08-09 23:50:28', '2021-08-10 05:40:26'),
('97980c979a1e3aa37c75ebe0dfcbd214869ea97521200f6125140a835d6637561d05c2deb55094c2', 44, 1, 'cJAE0pOx4d', '[]', 0, '2021-08-10 06:05:48', '2021-08-10 06:05:48', '2021-08-10 11:55:46'),
('9a2a8d7bdc892929fd06a63973aeb1772b36488c5bf1aec04590be61c4c48790b35baf2443305913', 1, 1, 'my-app-token', '[]', 0, '2021-08-03 17:37:59', '2021-08-03 17:37:59', '2022-08-04 04:37:59'),
('9afc9abfa6229fabe54f2c0c1ddf61db2ad43f09bb06b1e213e52ddcb5397d5f56038525d1201041', 44, 1, 'WaECagFjnp', '[]', 0, '2021-08-11 01:31:39', '2021-08-11 01:31:39', '2021-08-11 07:21:37'),
('9b1c773f50c69db98a422b7564572a73fe685b9b2a5ac7207949e41e49a44cbeb846ef4b4fd6985b', 44, 1, '9QKDVIkHsQ', '[]', 0, '2021-08-12 09:25:28', '2021-08-12 09:25:28', '2021-08-12 15:15:28'),
('9b3348858d4b35ab240dd01859949fb44d7f9cb48c04be249f9e9e8a7068ebe427cfb582a01ac1d3', 44, 1, 'fvAlQoPtai', '[]', 0, '2021-08-09 01:15:48', '2021-08-09 01:15:48', '2021-08-09 07:05:47'),
('9b6b8930fb360cc93b6c98c050bf63024a9b40cfa228f028fe2fd61c2748e22cde5b28761e69e845', 44, 1, 'iMAokOTXHu', '[]', 0, '2021-08-21 05:54:10', '2021-08-21 05:54:10', '2021-08-22 11:24:05'),
('9b7af87ea12ee5dccd590e8994a7a68bb2060f4e9a07f069ccc8ca635f0ad1a7f663279baeea00b3', 44, 1, 'y1iDtu0gVe', '[]', 0, '2021-08-13 07:16:19', '2021-08-13 07:16:19', '2021-08-13 13:06:18'),
('9c3b5898d0d30babc535bc2a93c794663f06b5909566879b3eb8245fdf2f058fbca3f116ff71976b', 44, 1, 'JmiBUbwiWu', '[]', 0, '2021-08-08 09:21:45', '2021-08-08 09:21:45', '2021-08-08 15:11:45'),
('9c970fe5f4425602ff5c6e398300c78ad14fbbaed6fd932dcf7ea64c89cc19cb04109f5ac003285b', 44, 1, '5rZ1OlSIB1', '[]', 0, '2021-08-14 12:27:45', '2021-08-14 12:27:45', '2021-08-15 17:57:43'),
('9cd862c009b091f2b04bcac2c5778562e46901db939a8d56ae1a463f8e8634a265cbb9a9df5a721f', 79, 1, 'JdAQ1C9dJp', '[]', 0, '2021-08-06 22:38:18', '2021-08-06 22:38:18', '2021-08-07 04:09:18'),
('9ce3aa125829448747fabbf34af9f22d981f30c55007e5666cbb17a3ddb969fefca327098077d4fe', 44, 1, '0xHz7uf0Rl', '[]', 0, '2021-08-14 06:25:18', '2021-08-14 06:25:18', '2021-08-14 12:15:17'),
('9cfedb9b0112af54a3ffce776f6acd41c8dd62b493d0960839622e89ef1f65f9216bc3618291bd63', 44, 1, 'oK5h9rIqPn', '[]', 0, '2021-08-08 10:03:20', '2021-08-08 10:03:20', '2021-08-08 15:53:20'),
('9e3ed5d7655ed7148f5d96e531178cc082059fda18ca941e7b6fd0a2f20149524e723674bb892784', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 20:12:52', '2021-07-31 20:12:52', '2022-08-01 07:12:52'),
('9f534a989f0168c493c53411dd815c1a97e0b6de9c4469409aa488c51bf98198dde4c37a7129b407', 44, 1, 'KceReLksHb', '[]', 0, '2021-08-13 11:34:14', '2021-08-13 11:34:14', '2021-08-13 17:24:13'),
('9fb16c04b10f2fc7a27d0179f92c4860950d357e7c2beb17c552fa94f9dc3724f83cda14d57cf310', 44, 1, 'tTUQtbAVI3', '[]', 0, '2021-08-09 22:59:39', '2021-08-09 22:59:39', '2021-08-10 04:49:39'),
('a3e272ab87fc10e02cb198e52d4cdfaf7b18e3780bbc17ef0e72eb80baf009dee43b0d0f2a604e1a', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 22:21:19', '2021-07-31 22:21:19', '2022-08-01 09:21:19'),
('a5e47c94378178398cb2a21ff89ffb9065aad7f709f061ae92e4d835918f74f74d8c4ad5d4ff2ebc', 44, 1, 'ozgs2M2PBt', '[]', 0, '2021-08-15 04:14:38', '2021-08-15 04:14:38', '2021-08-16 09:44:37'),
('a6a3aa9197c954ffa4ec106ba5d59c2a4a56d1619da38f1a190b73308ca904e36e0efc630211b393', 44, 1, 'nHzXYpD1wC', '[]', 0, '2021-08-13 10:22:43', '2021-08-13 10:22:43', '2021-08-13 16:12:43'),
('a6f4a92361e2c2230fae73040d1ac307049d073c564635f051c73ed5730c11081f0d5b15a2c87886', 44, 1, 'fRw89roxmc', '[]', 0, '2021-08-08 10:44:51', '2021-08-08 10:44:51', '2021-08-08 16:34:51'),
('a7342aa9e0eb62946c6ac959e2cc129e10ddd1e0887e3a1e45ff49cde98ee0a8ce3c28f593b4e397', 1, 1, 'my-app-token', '[]', 0, '2021-08-02 05:16:01', '2021-08-02 05:16:01', '2022-08-02 16:16:01'),
('a7835a457dedd951da8781f0421cf27821a94fd4e0268178bb51b28a6d0b3eb738d9ae66e53096a5', 44, 1, '2H2AZyGFEJ', '[]', 0, '2021-08-07 06:06:05', '2021-08-07 06:06:05', '2021-08-07 11:56:05'),
('a7e3e44e460b0fe4d816bd7b93401110bed14cd29458a7311a7e175f1075fcb1d5e155453f95f2ef', 1, 1, 'my-app-token', '[]', 0, '2021-08-03 17:38:01', '2021-08-03 17:38:01', '2022-08-04 04:38:01'),
('a9294aa8e6f17264aa9e1b9eb85cc82106733c8fb2aa6f32f391b09b92bb8d52d94f09fa42a5a028', 44, 1, 'HTFLHCauPg', '[]', 0, '2021-08-13 06:21:37', '2021-08-13 06:21:37', '2021-08-13 12:11:37'),
('aa2ad535be305afc974f03ce260305b68b8be9fb579ca74b6a5be04daead0d746872ba6c89dc5e5b', 44, 1, 'ts9p9MPnI9', '[]', 0, '2021-08-14 06:10:07', '2021-08-14 06:10:07', '2021-08-14 12:00:07'),
('ab72b3b526358bcf5d001fe8ad2a57cced8e6d624bfd75a98626bff9139163b29221fa4601e5e214', 44, 1, 'qi0hjiNY8e', '[]', 0, '2021-08-14 10:30:00', '2021-08-14 10:30:00', '2021-08-15 16:00:00'),
('acac8e35e3c2856a3acbabe3843f93f74e0944232694278c39c7f6d63f856913e8b56a0de5a64af0', 44, 1, 'IVbtP3dUoc', '[]', 0, '2021-08-13 08:54:52', '2021-08-13 08:54:52', '2021-08-13 14:44:50'),
('acf2ccffeedf7b707328cbca219cb7ab756756185e46f5a0b1b0216237ddd6817f6b831adf71723f', 44, 1, '83ecGsSmtZ', '[]', 0, '2021-08-09 12:39:18', '2021-08-09 12:39:18', '2021-08-09 18:29:16'),
('ad54eef869bec6462502348624caf1c7cd87378ed84445f2713ebb83a2b27a2473255b6db73ca46f', 44, 1, 'fK05ZU4idI', '[]', 0, '2021-08-10 07:45:59', '2021-08-10 07:45:59', '2021-08-10 13:35:59'),
('aed4d21e85d07fed53b009c83a82e1cbd487dcf98baa4da12c68f3b2132e0eb1dc6d46a9bd3863d7', 44, 1, 'LxP6kz8ng7', '[]', 0, '2021-08-13 00:04:24', '2021-08-13 00:04:24', '2021-08-13 05:54:24'),
('b0e8e281175a3a54df7f632a9abf075e279d542b70b0bfd9c496a9bf4b1ff3ea5506226b8f5453c0', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 22:17:31', '2021-07-31 22:17:31', '2022-08-01 09:17:31'),
('b1adc7f4c3d22011435a59a6b6544f7e8f2d8a52c0a2212ba9aa5515f653447aa2a2ab7603871902', 44, 1, 'P65JZUz5aQ', '[]', 0, '2021-08-07 02:48:59', '2021-08-07 02:48:59', '2021-08-07 08:19:58'),
('b225600b168a1145903e7a18855d9a95fb139f2c73a173cf7ad09e313c82b2c9d7d5128deff5b5da', 44, 1, 'L32QfqIWry', '[]', 0, '2021-08-14 06:27:34', '2021-08-14 06:27:34', '2021-08-14 12:17:33'),
('b2ca650fcd44666b4f0f873dc1b3d0c15f76c63a025b76137a66a60947946a2b3e5a84f4df184acf', 44, 1, 'pUb9xbrjap', '[]', 0, '2021-08-11 04:39:03', '2021-08-11 04:39:03', '2021-08-11 10:29:01'),
('b4a6778db31c1edc82b48b560a77141e79cc93e325477bf6a0c5cd63f5fa004a73d8a5c9d07e9031', 44, 1, 'XDmswSQ22Y', '[]', 0, '2021-08-06 23:32:08', '2021-08-06 23:32:08', '2021-08-07 05:03:06'),
('b774537229105de01939c12502efe1dd70ca1edfc79387d6bbd24480482e6399b0d13f9b7c3f9dff', 44, 1, '2b7swPOFRQ', '[]', 0, '2021-08-14 07:26:36', '2021-08-14 07:26:36', '2021-08-15 12:56:35'),
('b8ac0cf8ac5e05012f062cd424e2f57217da3480f6b8ce54b83d6e6e8f96a2abd61190296bcf2f3b', 44, 1, 'e8iKAz7bZu', '[]', 0, '2021-08-14 12:31:27', '2021-08-14 12:31:27', '2021-08-15 18:01:27'),
('b8c5a04035dc71643269ad3833591ec707b86ab0d0b92f806f58d678788b9e202a4d98efc404c57f', 83, 1, 'XjYhXyn9eP', '[]', 0, '2021-08-15 01:00:17', '2021-08-15 01:00:17', '2021-08-16 06:30:14'),
('b982d7facca2e7faf2328343055dee74107019bd00bd847ff76988af5d105c9f948d5a71c79d9898', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 20:16:17', '2021-07-31 20:16:17', '2022-08-01 07:16:17'),
('b9f9b03102b01faa5f5505e6054424981af1cd0622d472059ffc9a87382101324c30f3ca48197e17', 44, 1, '0tBqWHziH1', '[]', 0, '2021-08-10 01:56:20', '2021-08-10 01:56:20', '2021-08-10 07:46:19'),
('b9fda872ccfa0eb8a52d8d2b1b147c8c300f3b125a778eec40a66a7fbe8bb1dd0b35ed423e06fa37', 84, 1, 'fYhR7mUik8', '[]', 0, '2021-08-15 03:23:08', '2021-08-15 03:23:08', '2021-08-16 08:53:08'),
('ba06d4cb6556593983ae1af09238d460921e41a01e9cd28d595934d6b5642eea21c1b3b11755f9e9', 1, 1, 'ECibHaYt0w', '[]', 0, '2021-08-03 17:48:36', '2021-08-03 17:48:36', '2021-08-04 04:49:35'),
('bb6b979cc705e20853dff9db6793276bc45bb41b231fb9fbdf96196d3ae5b031ec39da0b938ed2ed', 44, 1, 'EG9VURHaqx', '[]', 0, '2021-08-14 07:38:46', '2021-08-14 07:38:46', '2021-08-15 13:08:45'),
('bbd46ab9b53e3a5e016b0d4cfed97d5f9466bf708c368af046ce5cc6400790dd915105d9859d9780', 44, 1, 'SeVTY0nmmx', '[]', 0, '2021-08-18 04:53:47', '2021-08-18 04:53:47', '2021-08-19 10:23:42'),
('be3c2ece97071dccb96c71ec85f5fa1371886c0ec11db07f20599a70d127e3b67c3b060e0cf52190', 44, 1, 'a683UBsKD0', '[]', 0, '2021-08-07 06:14:40', '2021-08-07 06:14:40', '2021-08-07 12:04:39'),
('bfe6529a878dd67205d47772ce8e98f59c7a3b6825c5c5531abc86d57adc2109b137aff9cf6f4ed2', 1, 1, 'McQ5n8qS6F', '[]', 0, '2021-08-03 17:49:57', '2021-08-03 17:49:57', '2021-08-04 04:50:57'),
('c186db86c369cacaaa6aff847508f9d35b2fdf9d94f6bc9cf63d6eb17d835ed1375d02a029f44ad3', 44, 1, 'kFGj12iNXG', '[]', 0, '2021-08-08 00:44:30', '2021-08-08 00:44:30', '2021-08-08 06:34:27'),
('c1bd7009ff1ed875bd7c75f6c1d542c28f17c0b102c94c5ce337d69cfad15d54648f07b4bcd91f79', 1, 1, 'Rv4w0uTnrL', '[]', 0, '2021-08-03 17:48:33', '2021-08-03 17:48:33', '2021-08-04 04:49:33'),
('c1e2cc2c249728e5b7c93e7bc91ce96add3439619e8418b20be2bc65c24f1bc8ca459e18000225a2', 44, 1, 'I0rlBlxjVq', '[]', 0, '2021-08-13 22:11:28', '2021-08-13 22:11:28', '2021-08-14 04:01:27'),
('c355e34a1630abbf8a249fe6696eee36bfebf479a7c43bf8273d80f31f4963f965162e4a99691918', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 20:14:53', '2021-07-31 20:14:53', '2022-08-01 07:14:53'),
('c397d891bfbbf81f26977c2992a2c8c9f3595585e53ae8ed500c37c01c2ec99febd850a4fc5b2ed6', 44, 1, '8aP5Hmpyrk', '[]', 0, '2021-08-14 10:12:41', '2021-08-14 10:12:41', '2021-08-15 15:42:40'),
('c4568479284c496073bec9c1ec06e96801cbd5a281eac034123c5ce733cad14accab77f5cf84bcd5', 76, 1, 'UGlH15GEdc', '[]', 0, '2021-08-06 22:31:02', '2021-08-06 22:31:02', '2021-08-07 04:02:02'),
('c45c0006bb83f626d0714d94bc56375603ec4d1f9b1a815c7a16df82d982129781c7b463306792e1', 44, 1, 'xlcWPKFBpY', '[]', 0, '2021-08-14 06:05:14', '2021-08-14 06:05:14', '2021-08-14 11:55:14'),
('c564dc0b93163e2846e4cd832f29f095e493b41ec500deb79eb3e993fcb8205bf94624a267c39d54', 44, 1, 'Oh7uYOrCV9', '[]', 0, '2021-08-09 01:37:39', '2021-08-09 01:37:39', '2021-08-09 07:27:38'),
('c5f83f5ea2201ea621580ab85bfe1b16f97d9a874c5a44889e0fa4583fb41994af82a43ee9864027', 44, 1, 'yKivyX8gBZ', '[]', 0, '2021-08-13 06:23:08', '2021-08-13 06:23:08', '2021-08-13 12:13:08'),
('c7a358779d574e6fe49f34de7e4119e46c6471b1f4145b78681fd127c099778cd070574455b99c5c', 44, 1, '1wMr7FOT8n', '[]', 0, '2021-08-07 02:52:49', '2021-08-07 02:52:49', '2021-08-07 08:23:47'),
('c81867b9b23a2eb0e4d75b8268c9741905e83eec350d924ba5093c0fc7782bd6973bc65495b6c80b', 44, 1, 'GDG2BJ9xR4', '[]', 0, '2021-08-14 03:37:40', '2021-08-14 03:37:40', '2021-08-14 09:27:40'),
('c89a14d5114bc73a93a167811d42bc40a1b6c6d8dfb6b3b4fed45e9a990a708cb829fb6b2cd04a2f', 44, 1, 'j1cXT9gDSI', '[]', 0, '2021-08-12 09:17:47', '2021-08-12 09:17:47', '2021-08-12 15:07:47'),
('cb14f533be4ad8203ca8e809818789b83ed01d6155af862f993027c737504ec9d6e7d2f8cdb68655', 1, 1, 'my-app-token', '[]', 0, '2021-08-02 21:43:05', '2021-08-02 21:43:05', '2022-08-03 08:43:05'),
('cbe9a8e28eb6625c800c7bd42e26cfa67abe0ab39462dd663669235e52b37098e3cfb60bba1c0f65', 44, 1, 'P7n0xeQwrN', '[]', 0, '2021-08-12 09:36:41', '2021-08-12 09:36:41', '2021-08-12 15:26:41'),
('cc05e1bf2b87b8a032ef85963c8136220592563463e3da09aeec2697dea300a2d73f5dcc41fb6d58', 1, 1, 'my-app-token', '[]', 0, '2021-08-02 21:08:48', '2021-08-02 21:08:48', '2022-08-03 08:08:48'),
('ccacc2ec5c0b93b975097ca65e1c2e973cbd969c448953ed47a2ea485456e6b92a84bb62ae736c97', 1, 1, '8qlML99y3i', '[]', 0, '2021-08-06 05:53:44', '2021-08-06 05:53:44', '2021-08-06 11:24:41'),
('ccd10b3b6108f53377b0a2a9c68ab724719fcb029ee33a3b2604f8d27a93bf73a03595529c2fed3d', 44, 1, 'g6O3f6IhPV', '[]', 0, '2021-08-10 05:36:27', '2021-08-10 05:36:27', '2021-08-10 11:26:26'),
('cd12f5b4dd89dfe7825f2f0fa0f053c6043368e12af64b86a6d3de9e079cbb19fc6bb7129704f11e', 44, 1, 'CAgm0dzE6C', '[]', 0, '2021-08-10 04:54:04', '2021-08-10 04:54:04', '2021-08-10 10:44:04'),
('cd19ef5179724c4de61bf2f963d91009c4048a6a8fb00ea09479770d34b56a1e1fe34976e436f78e', 44, 1, 'BvvdBvKHWi', '[]', 0, '2021-08-09 06:58:57', '2021-08-09 06:58:57', '2021-08-09 12:48:56'),
('cd3630302307c883425e511bba7a2de8f98865b6ad8a6f4dd14a30a4d82bebcedbcdf69102ad88b0', 44, 1, 'JGJih3qcKG', '[]', 0, '2021-08-14 11:52:57', '2021-08-14 11:52:57', '2021-08-15 17:22:55'),
('d123d9ba0bc9e91f1462b28e23b76f8ed7b18adf2ee3232b9a232eec883911c37803724a96f0025c', 44, 1, 'MWvr6YZ6Tc', '[]', 0, '2021-08-10 02:30:43', '2021-08-10 02:30:43', '2021-08-10 08:20:42'),
('d37413cd03d37f4dfb214ac56dbf05f11395a43e6be1bc2429dcf47091298732a238c280ad7cee2c', 37, 1, 'K3m4APOZBA', '[]', 0, '2021-08-06 07:53:11', '2021-08-06 07:53:11', '2021-08-06 13:24:08'),
('d3be3579e0be204dbba9fcd5973904d0cb1e2e4505cd17d066a329d95b24ebd4578c4338c0fdc522', 44, 1, 'tD3FpLTqJU', '[]', 0, '2021-08-11 00:05:01', '2021-08-11 00:05:01', '2021-08-11 05:55:00'),
('d3e0432a0d7961a70e04ab20a9201394e595a9a6f7d2684b0a0288ed931f7a0097b3be8894a8f952', 1, 1, '3A3Nl9tCeg', '[]', 0, '2021-08-06 03:18:40', '2021-08-06 03:18:40', '2021-08-06 08:49:38'),
('d426e18539ff85f0bb7e62ec10a87ef676f2f506a2da9b46d248a9d9562d90e274cf2a43ef50adad', 44, 1, 'qdSialGfY3', '[]', 0, '2021-08-12 07:14:12', '2021-08-12 07:14:12', '2021-08-12 13:04:12'),
('d45754a25d1151f5c2831a1310814228b2bc4d41eeac7e9ddb5ef7fad39456fa8553e23eab16c8c5', 44, 1, '5q72xrnL44', '[]', 0, '2021-08-11 02:48:59', '2021-08-11 02:48:59', '2021-08-11 08:38:59'),
('d5e54aa68e78ae713f512189792a31e3e99ffa86c74c8bf1cfd13b252623113364bd6e68af7ac49c', 44, 1, 'xsjRKfnQew', '[]', 0, '2021-08-12 07:32:10', '2021-08-12 07:32:10', '2021-08-12 13:22:10'),
('d63f33abd78b5aa027c9d9167f7a77ad5ed7374dc514f40689d56b024fc4543884a6de135988aebf', 44, 1, '93sIZU4cgA', '[]', 0, '2021-08-14 10:08:23', '2021-08-14 10:08:23', '2021-08-15 15:38:21'),
('db3efe138797ccdba29c903c793c5db8a16f69b7805a601de76aaa2f49a321dc791d2a8d5700a51e', 44, 1, 'jOMSR5XUfD', '[]', 0, '2021-08-09 05:06:59', '2021-08-09 05:06:59', '2021-08-09 10:56:58'),
('dc10076a66f1c8d8b076fbe764ecc6da5e27b472d6279d86231a32f116ac9196caea6084ac7e26cf', 44, 1, 'bLQ9wHLnQv', '[]', 0, '2021-08-14 02:43:46', '2021-08-14 02:43:46', '2021-08-14 08:33:46'),
('de281cffd7e384f1e55c2278b1a7b7f252fee211a3f538386ffa72659c0b878b3d4bdd16dddbf6a7', 44, 1, '3AJRFpk8FZ', '[]', 0, '2021-08-08 22:38:44', '2021-08-08 22:38:44', '2021-08-09 04:28:41'),
('df2d07d2b530b94d61d82b1a470cc623a44a0797d2fd25063cb6244b03fe38aef3200c3d1eb3ed39', 44, 1, 'dZOy6J214r', '[]', 0, '2021-08-07 03:19:49', '2021-08-07 03:19:49', '2021-08-07 09:09:48'),
('dfd8571bfaa6ed2aaa736210003425c1db5f498e93ac1d9f27e3dab73b189d0e49b376a6d5761b48', 44, 1, 'KoYvUjhVxD', '[]', 0, '2021-08-12 08:28:00', '2021-08-12 08:28:00', '2021-08-12 14:17:59'),
('dff8caf12a6b7cf6c13ab1b1f89963033f70533087599ddc85452d250d469740370262e743d0e5c4', 44, 1, 'nFQes0D9Vx', '[]', 0, '2021-08-10 07:12:40', '2021-08-10 07:12:40', '2021-08-10 13:02:40'),
('e0fd37f1b5b87e080c093fa68ef203df8486a38a4c61e038cb8c9cace6e199fd3022dd7d44612b5b', 44, 1, 'cWkzn5Z1aF', '[]', 0, '2021-08-06 09:21:57', '2021-08-06 09:21:57', '2021-08-06 14:52:57'),
('e121d217af7e33ed7381498a3be24fe12ae025032ba1ad3e2276ecedad36abed06564aae38c386f8', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 21:53:36', '2021-07-31 21:53:36', '2022-08-01 08:53:36'),
('e420579be00c5c1d62613bea1cd9d3641f58d0e8eca7d00da416dc2ce6b2eab7c82b84deaa857eb2', 44, 1, 'ToJxxERiDf', '[]', 0, '2021-08-10 01:42:06', '2021-08-10 01:42:06', '2021-08-10 07:32:04'),
('e432d6b71f9633b37742dcdce952dda04b7a351bbe82e15cdc8b8ce5f7b46cbd60f289e012a48b2c', 1, 1, 'my-app-token', '[]', 0, '2021-08-02 21:26:24', '2021-08-02 21:26:24', '2022-08-03 08:26:24'),
('e4a0b88459c233e4ea262922e02a2ba49aec5331d3abf6b99bfd30e28cc7a3f972465cebcee226bf', 44, 1, 'OlQrKmrt8O', '[]', 0, '2021-08-11 02:49:00', '2021-08-11 02:49:00', '2021-08-11 08:38:59'),
('e607edcc07d620b56151a3fce7efa8649c7543069266a6f0f1341516786b9c39123459c8f3029848', 44, 1, 'St2lQtv4Jz', '[]', 0, '2021-08-14 12:19:34', '2021-08-14 12:19:34', '2021-08-15 17:49:33'),
('e773a27e091e9a8f05f88e3abc8dbc7ac9fd4681b37fe2fc88461a181eada3d12a9937cf8795ddb3', 85, 1, 'Ou1CARZIgB', '[]', 0, '2021-08-15 07:28:34', '2021-08-15 07:28:34', '2021-08-16 12:58:31'),
('e7be0a0fe13fe3fef55c3aec3b244bbcd8e314361311c2e0920382168ef60b1a6483e9a411809e31', 1, 1, 'my-app-token', '[]', 0, '2021-08-01 19:29:52', '2021-08-01 19:29:52', '2022-08-02 06:29:52');
INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('e7cad02eaa6c9c2492cb126d591df08db1af0d8c016ff72e7cee7588eea074663ec4a2aad7863b0a', 44, 1, 'JHRazTx0Im', '[]', 0, '2021-08-13 00:22:42', '2021-08-13 00:22:42', '2021-08-13 06:12:40'),
('e96af925ac8950e2a531d3b444f9a0d2724486f4f7fd0486efd443b1c5e2f22e2b306fc00d572eac', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 23:40:58', '2021-07-31 23:40:58', '2022-08-01 10:40:58'),
('e976de190aac4a88c10ddb5cc98aad0847b9b9287952e90d5033a6ac450a283d2cbc2fec3efb4ce4', 44, 1, 'EcnvwRHqRu', '[]', 0, '2021-08-11 02:48:08', '2021-08-11 02:48:08', '2021-08-11 08:38:07'),
('e9ee908e89fdd158d9171bda13a447be4811540fa212b6ecd27c14e64dc4334deacad9542c5ea2b6', 59, 1, 'Qrd5IteIvN', '[]', 0, '2021-08-06 21:58:50', '2021-08-06 21:58:50', '2021-08-07 03:29:50'),
('eae3718a721c59e4103a376bc915e3a4bfc979b949492a09a7aff3cbf692217794fd92b792b56419', 45, 1, 'f0LjdvPTrH', '[]', 0, '2021-08-06 11:14:52', '2021-08-06 11:14:52', '2021-08-06 16:45:52'),
('ec9ecf712ff8f7b92cc32276a65da85a6e9d3d6e55df27466d1962ad49550055a88e88c384a6eb2f', 44, 1, 'sDWTfMKjzP', '[]', 0, '2021-08-15 01:33:06', '2021-08-15 01:33:06', '2021-08-16 07:03:05'),
('eccd125b94f6a379a8d1bc35eb794dfa224ce5901d2276aa4d11617a416041bd6ae15e5c80f02eab', 44, 1, 'KteAOSCQC8', '[]', 0, '2021-08-14 10:05:18', '2021-08-14 10:05:18', '2021-08-15 15:35:18'),
('ecd9f8ddcd7e0d7dd0877c57b0a9613a7805ce4ef13dafe8cd4febda3277ac471ed5f3782ae2d49d', 1, 1, 'my-app-token', '[]', 0, '2021-08-01 01:11:25', '2021-08-01 01:11:25', '2022-08-01 12:11:25'),
('ecdb5a621dc08fe2f0136d057c184b49f741889d7d16f84cedb969f59eb4610e7faafbbf3b085800', 1, 1, 'mDe6zqvXDm', '[]', 0, '2021-08-06 09:19:41', '2021-08-06 09:19:41', '2021-08-06 14:50:39'),
('ef0338c2400f8ba37ae9d367c2aba9bf207655bfacf0ca9bcda6ca393321b63ad4eac0bb0ff06b72', 44, 1, 'lkW4SIF7Xx', '[]', 0, '2021-08-14 10:06:21', '2021-08-14 10:06:21', '2021-08-15 15:36:21'),
('effbfd11629791fe04c16d0c8588383dd9ee186b23368d0e2ba14d0c1f47d460cea40c75f15119de', 44, 1, '42HDbXgwXx', '[]', 0, '2021-08-14 12:13:07', '2021-08-14 12:13:07', '2021-08-15 17:43:07'),
('f172328e055b03df7d1fe18c4b10e6afd53f6b457ee56e197ee49863da2bd978e64f001bdfe1a7b3', 44, 1, 'p2787S0nyV', '[]', 0, '2021-08-09 04:10:59', '2021-08-09 04:10:59', '2021-08-09 10:00:59'),
('f1fbc7bef1b728595d3ecf3616657fa8b422f45251a369bb320d95f097ec668ba151fb4b52cc94e6', 1, 1, 'my-app-token', '[]', 0, '2021-08-01 19:29:50', '2021-08-01 19:29:50', '2022-08-02 06:29:50'),
('f2ab4b07f2008b7a57efa75d11c47c6f0f295dadfe7af478a7a0692e8e8ae7bc3072989a1088c48e', 25, 1, 'my-app-token', '[]', 0, '2021-08-06 03:27:13', '2021-08-06 03:27:13', '2021-08-06 08:58:13'),
('f3f4c914b6a90edd266192f1056500023b0ea1f75f359e0bdc4b05da4044e5664aa8ceed4747814f', 44, 1, 'uh0QHsliwJ', '[]', 0, '2021-08-14 12:01:48', '2021-08-14 12:01:48', '2021-08-15 17:31:47'),
('f47a71fe1305b4b3e943b60d4c7ef6bf65b23728343e1756f65d585317da7cd2e591796aaccda7c6', 58, 1, '1g7QHEAxVu', '[]', 0, '2021-08-06 21:54:45', '2021-08-06 21:54:45', '2021-08-07 03:25:43'),
('f5a18a74a0f15053ebd0a6515e40f8bc4ce2d5dd1e89d0353c27e40e4a3c4c75a1f9199d8b8b2bdf', 27, 1, 'sZ0KzhsSA1', '[]', 0, '2021-08-06 07:18:22', '2021-08-06 07:18:22', '2021-08-06 12:49:21'),
('f5d472047b2b5718f15a548f1ea7ede95b6245c68805d3c15b7815c23a1670ba12d4708fc9c67430', 87, 1, 'L9ntVLGZy4', '[]', 0, '2021-08-15 10:49:06', '2021-08-15 10:49:06', '2021-08-16 16:19:04'),
('f6879fcc668a62b455fa2ec321054f36e8a36fd75e68aadb8cd0f3689ce7efba02fb481712ac8208', 1, 1, 'my-app-token', '[]', 0, '2021-08-01 17:24:35', '2021-08-01 17:24:35', '2022-08-02 04:24:35'),
('f689acd2608908750e172f1dee4ecda2f985a44bc429f722282c52a817011b93d5626b9d04dd5cfe', 1, 1, '7aHEq0F9SPPXtavFj8qk24otBpohYVU1hSrBDHOJ31b21Oo9jrEfHQoG6ZLrODtrIZ6UoJcYUHRjJRUSB0N3ljnWGhVXUH6dmnSk0JC71A2o2swKUrpw2RYRf7GLUAGlsAm9Sfo30SzPyVxbMSGvHOR6atrdyE6Rqy5plaInAVzHZwHg15GLH6A4T8uIyTsxg4rsjA7g', '[]', 0, '2021-08-03 17:48:12', '2021-08-03 17:48:12', '2021-08-04 04:49:12'),
('f76abe14e60efd1723b99eac7d7d626c7525564a48f1195d932aabc09aff1f686469cd551fc289c6', 44, 1, 'RSKqCg37zi', '[]', 0, '2021-08-09 04:31:52', '2021-08-09 04:31:52', '2021-08-09 10:21:52'),
('f7dd3a251834344038ec0c09ed558c11b0bf9506d5510fdf377694c09379f278bad8eea87cb69f8d', 44, 1, 'L9d1dcBJok', '[]', 0, '2021-08-13 21:50:33', '2021-08-13 21:50:33', '2021-08-14 03:40:31'),
('f84fde2d37504ca66901998db4038c5b76bb916bf95232dca47efc5984f8ac1f3369a3bca0b3a985', 44, 1, 'IiBIvWW9yo', '[]', 0, '2021-08-14 10:27:30', '2021-08-14 10:27:30', '2021-08-15 15:57:30'),
('f8c216dc44cd4abbfccd9bdb5e3a5facfcc339ebe11184e95d90961bb9785723c758b24504a4ea36', 44, 1, 'em2wNiXuCM', '[]', 0, '2021-08-08 07:36:03', '2021-08-08 07:36:03', '2021-08-08 13:26:01'),
('f97601f53f57b75917acb7441195628cebe197bd108185078fa0030cb47a803cabb17396d163ce5b', 75, 1, 'IuN84B8SKm', '[]', 0, '2021-08-06 22:27:57', '2021-08-06 22:27:57', '2021-08-07 03:58:56'),
('f97a794b3078bd8218e179f6201662c665a19e01c0dec5f64e9813291a5621c2d4b45f27ff8333b3', 44, 1, 'XavmznZtxO', '[]', 0, '2021-08-10 06:28:03', '2021-08-10 06:28:03', '2021-08-10 12:18:02'),
('fac01972fd07cfc8a0d3c2b12ce09d7804b7f5e1516dbde38b58445dca2e8b300940effe9011d86e', 44, 1, '1tGkGMRNvj', '[]', 0, '2021-08-10 02:54:00', '2021-08-10 02:54:00', '2021-08-10 08:44:00'),
('fb03f6e7a0d44dc9ab6fa3e46ee832d159b9ec5b99ab118ea829a9194b95cdf71dfcd89e7330ae98', 1, 1, 'my-app-token', '[]', 0, '2021-07-31 22:25:12', '2021-07-31 22:25:12', '2022-08-01 09:25:12'),
('fb04e3c2d009929355bee8146253297eab0f1559d89a7e838eb9c2c83beb491e234000c8cd2c47f1', 44, 1, 'qWq2ptYZmU', '[]', 0, '2021-08-06 12:42:39', '2021-08-06 12:42:39', '2021-08-06 18:13:39');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'fJGYzor07BT8TWqqFzVFytc5GzyTcS8DTlZ5XKcC', NULL, 'http://localhost', 1, 0, 0, '2021-07-31 20:10:51', '2021-07-31 20:10:51'),
(2, NULL, 'Laravel Password Grant Client', 'hJO5vVI8pIbuuVCUmJtORGgJK0PbXh0YW0F5Rb5f', 'users', 'http://localhost', 0, 1, 0, '2021-07-31 20:10:53', '2021-07-31 20:10:53');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2021-07-31 20:10:51', '2021-07-31 20:10:51');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `invoice_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `marchent_id` int(10) UNSIGNED DEFAULT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `total_price` double(10,2) DEFAULT NULL,
  `discounted_price` double(10,2) DEFAULT NULL,
  `tax_price` double(10,2) DEFAULT NULL,
  `amount` double(10,2) DEFAULT NULL,
  `shiping_charges` double(10,2) DEFAULT NULL,
  `total_item` int(11) DEFAULT NULL,
  `item_qty` int(11) DEFAULT NULL,
  `address_id` bigint(20) UNSIGNED DEFAULT NULL,
  `type_of_shiping` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_item`
--

CREATE TABLE `order_item` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED DEFAULT NULL,
  `product_id` int(10) UNSIGNED DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `unit_price` double(10,2) DEFAULT NULL,
  `total_price` double(10,2) DEFAULT NULL,
  `tax_percentage` double(10,2) DEFAULT NULL,
  `discount_percentage` double(10,2) DEFAULT NULL,
  `discount_amount` double(10,2) DEFAULT NULL,
  `tax_amount` double(10,2) DEFAULT NULL,
  `amount` double(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(1, 'App\\Models\\User', 1, 'my-app-token', '58052c8d4970368339a9b61dfd12894d2d9a3ba15813a8bc9a1c13eff31ece8b', '[\"*\"]', NULL, '2021-07-16 14:54:00', '2021-07-16 14:54:00'),
(2, 'App\\Models\\User', 1, 'my-app-token', 'd05a358e37c371c5d018e74f00e3464f941cc50ec4d69ddd127c164ef44f9043', '[\"*\"]', NULL, '2021-07-16 14:54:34', '2021-07-16 14:54:34'),
(3, 'App\\Models\\User', 1, 'my-app-token', '586913dae2a726906f090aac2e1b52ff36a2726bcf7e9d42b8c237e0b682c270', '[\"*\"]', NULL, '2021-07-16 15:06:10', '2021-07-16 15:06:10'),
(4, 'App\\Models\\User', 1, 'my-app-token', 'a1affdc022f905661e536636e5b3150b3cdbe737f8d2ebe9db959c2901a303b7', '[\"*\"]', NULL, '2021-07-16 15:06:31', '2021-07-16 15:06:31'),
(5, 'App\\Models\\User', 1, 'my-app-token', 'edd725b7cfe673ed5591a46c9310c837c15d545a41adfa224fccc5b62ffcfcd4', '[\"*\"]', NULL, '2021-07-16 15:09:02', '2021-07-16 15:09:02'),
(6, 'App\\Models\\User', 1, 'my-app-token', '84aafb60832154aab178786ff46d283fa23f809f45a0051f9065859c013496b3', '[\"*\"]', NULL, '2021-07-16 18:32:13', '2021-07-16 18:32:13'),
(7, 'App\\Models\\User', 1, 'my-app-token', 'f5060bcb061e2338f232c3c7479c81034441fe5f536625c1364895af81dad376', '[\"*\"]', NULL, '2021-07-16 21:26:06', '2021-07-16 21:26:06'),
(8, 'App\\Models\\User', 1, 'my-app-token', 'e009548673bd4219698f400140e2c5579c513be603a9c24c5dc7cebe78129622', '[\"*\"]', NULL, '2021-07-17 02:26:23', '2021-07-17 02:26:23'),
(9, 'App\\Models\\User', 1, 'my-app-token', 'af8b111c1736717b28d9bc68770024409aaebe8371f155dca5a934f8cc58e7d0', '[\"*\"]', NULL, '2021-07-17 15:14:39', '2021-07-17 15:14:39'),
(10, 'App\\Models\\User', 11, 'my-app-token', '48c8d06b275639476f5f4653b8706ea92166e0ea3bc2068838c3ae2608ab98cb', '[\"*\"]', NULL, '2021-07-18 04:41:30', '2021-07-18 04:41:30'),
(11, 'App\\Models\\User', 12, 'my-app-token', '10095523d80a9904887d260fde44eb7a2dea9b78f7719ec4890fa5efdad6bd56', '[\"*\"]', NULL, '2021-07-18 04:43:03', '2021-07-18 04:43:03'),
(12, 'App\\Models\\User', 14, 'my-app-token', 'bdfd093217ed01145d89c556a67f3cf2037d77796492fd41b1050ed7c40b3fa4', '[\"*\"]', NULL, '2021-07-18 04:48:23', '2021-07-18 04:48:23'),
(13, 'App\\Models\\User', 17, 'my-app-token', '6cd8dbd0bd687b14f70859d2e12b6d6050636efabec6e7d699e9ef36c7658391', '[\"*\"]', NULL, '2021-07-18 05:06:55', '2021-07-18 05:06:55'),
(14, 'App\\Models\\User', 18, 'my-app-token', '8c1b64b8b87abcaadc1aacd1e751457fd6bcf4cf1a23b851adf9597e498ff6c0', '[\"*\"]', NULL, '2021-07-18 05:11:01', '2021-07-18 05:11:01'),
(15, 'App\\Models\\User', 19, 'my-app-token', '8316e1b508ef8dd8ead7e840f76863eb475589218e2aab7153f1272926fc73d4', '[\"*\"]', NULL, '2021-07-18 16:51:35', '2021-07-18 16:51:35'),
(16, 'App\\Models\\User', 20, 'my-app-token', '20a324bde6c3357099c59f573e2fe086408822b2453af4285579d2836c64263b', '[\"*\"]', NULL, '2021-07-18 17:36:22', '2021-07-18 17:36:22'),
(17, 'App\\Models\\User', 21, 'my-app-token', 'd806a0b1b457e1c586cdf6970d49b50e564f159b1e805cd63749c185f6abac2d', '[\"*\"]', NULL, '2021-07-18 17:39:55', '2021-07-18 17:39:55'),
(18, 'App\\Models\\User', 22, 'my-app-token', '8a5a072c9ed1930b1c334cb05a97f799f23226dc436deaa18d22d60c25bf24ce', '[\"*\"]', NULL, '2021-07-18 17:44:52', '2021-07-18 17:44:52'),
(19, 'App\\Models\\User', 1, 'my-app-token', '44b472bbe584119caea78e9b49bebd353c5773595f19d0512caaba0750231c27', '[\"*\"]', NULL, '2021-07-18 18:34:45', '2021-07-18 18:34:45'),
(20, 'App\\Models\\User', 23, 'my-app-token', '101077215769524e883ff0e6064ebac99865e130b719440399d9b75f4e3b8a81', '[\"*\"]', NULL, '2021-07-18 22:47:51', '2021-07-18 22:47:51'),
(21, 'App\\Models\\User', 23, 'my-app-token', '731fbe69b80347ef3cc9522889367d3c113354dfc547ff9319f8fc5d42418585', '[\"*\"]', NULL, '2021-07-18 22:50:52', '2021-07-18 22:50:52'),
(22, 'App\\Models\\User', 1, 'my-app-token', '56427504f324cc1ebb554108c1ead6bfab26598c931c31508190cce82d1d8e76', '[\"*\"]', NULL, '2021-07-20 19:24:01', '2021-07-20 19:24:01'),
(23, 'App\\Models\\User', 1, 'my-app-token', 'b791e0a1806a466a935230b67141083a3c82d3728ad3204879c8295576df22ef', '[\"*\"]', NULL, '2021-07-20 19:24:41', '2021-07-20 19:24:41'),
(24, 'App\\Models\\User', 1, 'my-app-token', '72d09642bb2442c47a743dbe3a59d160c22a6cd725fa39f839d81c51fc2e189f', '[\"*\"]', NULL, '2021-07-20 19:26:04', '2021-07-20 19:26:04'),
(25, 'App\\Models\\User', 1, 'my-app-token', '3a1869452d9e10ff4947a4f09c81aab50802920210c06df9f2f19fa87f6bfc08', '[\"*\"]', NULL, '2021-07-20 19:27:05', '2021-07-20 19:27:05'),
(26, 'App\\Models\\User', 1, 'my-app-token', 'baf3aadaef91bd8e9c8d2a759eed2611f01c6d64fcbce1e6f728d70413916d9d', '[\"*\"]', NULL, '2021-07-20 19:27:45', '2021-07-20 19:27:45'),
(27, 'App\\Models\\User', 1, 'my-app-token', '004e1cd1c3875dd9721f155df38c1e8015e326ea3f5239cc51a75d08990c6916', '[\"*\"]', NULL, '2021-07-20 19:30:31', '2021-07-20 19:30:31'),
(28, 'App\\Models\\User', 1, 'my-app-token', '8aea08adb9ff7da84a9a4901a4d115ba741fba3f438fe28251fabca8cb3c0800', '[\"*\"]', NULL, '2021-07-20 19:31:02', '2021-07-20 19:31:02'),
(29, 'App\\Models\\User', 1, 'my-app-token', 'd83aad928de2e5d6cb5b6e6243c2cb6622938a5e5d923cd5fd7ad18da542696b', '[\"*\"]', NULL, '2021-07-20 19:31:24', '2021-07-20 19:31:24'),
(30, 'App\\Models\\User', 1, 'my-app-token', '87505756a50a350b2ab9a691d78866c086714d2a61c51fc697dcdd64cb830ba5', '[\"*\"]', NULL, '2021-07-20 19:33:25', '2021-07-20 19:33:25'),
(31, 'App\\Models\\User', 1, 'my-app-token', 'e1f76e2f564d489582a686c3fe0a3e2b74e38fec30d75de3f3ffaf07b3cd06de', '[\"*\"]', NULL, '2021-07-20 19:35:51', '2021-07-20 19:35:51'),
(32, 'App\\Models\\User', 1, 'my-app-token', 'c52696b6af1cf07cda1a9af504a687912b8552427dea14086af460fa0e038957', '[\"*\"]', NULL, '2021-07-20 19:37:34', '2021-07-20 19:37:34'),
(33, 'App\\Models\\User', 1, 'my-app-token', '228654379fe658bde22f436ea8efa2d0fb08dea0c5cbfce3632d8cd27acebcf6', '[\"*\"]', NULL, '2021-07-20 19:38:27', '2021-07-20 19:38:27'),
(34, 'App\\Models\\User', 1, 'my-app-token', '7c8bb84641f54e870da504acb54006e186a11fa9ba63e129281af1af90ea2af9', '[\"*\"]', NULL, '2021-07-20 20:03:07', '2021-07-20 20:03:07'),
(35, 'App\\Models\\User', 1, 'my-app-token', '6d84c49309fc56291d9a9f594112e8f6cad0e7be3ab2b61b8005c0eff2dc144e', '[\"*\"]', NULL, '2021-07-20 20:39:02', '2021-07-20 20:39:02'),
(36, 'App\\Models\\User', 1, 'my-app-token', '5fac65763a743e379d780e83b44d77eabae0a7696c8ba6024cd6a72a95f485c4', '[\"*\"]', NULL, '2021-07-20 22:27:34', '2021-07-20 22:27:34'),
(37, 'App\\Models\\User', 1, 'my-app-token', 'de9d79ae55bceb08d172586784beba17e5f274e5dbaab0657073cc073b15b513', '[\"*\"]', NULL, '2021-07-25 17:59:08', '2021-07-25 17:59:08'),
(38, 'App\\Models\\User', 1, 'my-app-token', 'a6438a89f6c41bb5fa6f2b76550682a252ba173227264f85770a752e2f65adc6', '[\"*\"]', NULL, '2021-07-27 18:16:19', '2021-07-27 18:16:19'),
(39, 'App\\Models\\User', 1, 'my-app-token', 'd1f4c3ab1328ae7a09d3acf8b7022e38c47f9ef356b04e04df2e116d42176cbd', '[\"*\"]', NULL, '2021-07-28 00:40:08', '2021-07-28 00:40:08'),
(40, 'App\\Models\\User', 1, 'my-app-token', '5a7bec42f6d438e10dcedb06305742ae467f5e73382b6d1b1d7319705d582b7f', '[\"*\"]', NULL, '2021-07-28 00:42:55', '2021-07-28 00:42:55'),
(41, 'App\\Models\\User', 1, 'my-app-token', '3102557b690deebc8946ccf41c536130e78b2912f6ba8cb68cba3919dafa7cfa', '[\"*\"]', NULL, '2021-07-28 00:47:57', '2021-07-28 00:47:57'),
(42, 'App\\Models\\User', 1, 'my-app-token', '4554e000e43a8f960357771a47dbaf8d7b939f1ebe8b3349dff4737a3fac9e90', '[\"*\"]', NULL, '2021-07-28 01:05:18', '2021-07-28 01:05:18'),
(43, 'App\\Models\\User', 1, 'my-app-token', '7689aae6e99ec0dfb1879a63c154d58b7d9d8b498662da8198ba1253ebdaa987', '[\"*\"]', NULL, '2021-07-28 01:06:55', '2021-07-28 01:06:55'),
(44, 'App\\Models\\User', 1, 'my-app-token', '4a44fcd87d0dad4dec263d26d18bcacc3cb69797286b6b0aa51bf4aee1849c95', '[\"*\"]', NULL, '2021-07-28 01:07:19', '2021-07-28 01:07:19'),
(45, 'App\\Models\\User', 1, 'my-app-token', '4e28028f76f6f5bf95ead050d823d6e5276fcf952bef23875b2fdf7608d37965', '[\"*\"]', NULL, '2021-07-28 01:07:48', '2021-07-28 01:07:48'),
(46, 'App\\Models\\User', 1, 'my-app-token', '80157594fc970e102568b3d86f57358602e7c2e970a533ff77a9f72564db92a3', '[\"*\"]', NULL, '2021-07-28 17:27:40', '2021-07-28 17:27:40'),
(47, 'App\\Models\\User', 1, 'my-app-token', 'e7f7fb58cea4784f142f125924e28eab68a76b8f11fd0a20d26562a881f6750c', '[\"*\"]', NULL, '2021-07-28 17:46:35', '2021-07-28 17:46:35'),
(48, 'App\\Models\\User', 1, 'my-app-token', '3fa7d6289c6bf87bd6b06b0a374a7a4c1bde82e6b04899f9e948e41bb753974e', '[\"*\"]', NULL, '2021-07-29 05:02:34', '2021-07-29 05:02:34'),
(49, 'App\\Models\\User', 1, 'my-app-token', 'b107f5ecaca53871b8001b8ccbd165a345b5ca295ea01e2f465c20efbcc89a2b', '[\"*\"]', NULL, '2021-07-29 05:02:48', '2021-07-29 05:02:48'),
(50, 'App\\Models\\User', 1, 'my-app-token', 'be897762a219b0454ed3bf02de6a44cbf86618f3460b3d5c4795d79a9ef18ef3', '[\"*\"]', NULL, '2021-07-29 05:54:23', '2021-07-29 05:54:23'),
(51, 'App\\Models\\User', 1, 'my-app-token', 'e6de32009564e828955a962a86ef1f57fe98262d41ad792a82b5ab153f99a546', '[\"*\"]', NULL, '2021-07-29 05:57:42', '2021-07-29 05:57:42'),
(52, 'App\\Models\\User', 1, 'my-app-token', '83ae75e945ec4dbc46236a3e7119af6f83d0eae6bca74239861d412c8a3a9504', '[\"*\"]', NULL, '2021-07-29 06:00:00', '2021-07-29 06:00:00'),
(53, 'App\\Models\\User', 1, 'my-app-token', '9a303ef3b1e025446583b738c1f1c388e2c192a9d5af3125116a698cc241d790', '[\"*\"]', NULL, '2021-07-29 06:04:48', '2021-07-29 06:04:48'),
(54, 'App\\Models\\User', 1, 'my-app-token', '020553485733854a56169abb82e0b54dc42f0f4bde34407573048ce654fc5475', '[\"*\"]', NULL, '2021-07-29 06:09:25', '2021-07-29 06:09:25'),
(55, 'App\\Models\\User', 1, 'my-app-token', '93ad35698f1275dda6e0f8c22671bf586989e278c7ed49e0bb1a432e3161f288', '[\"*\"]', NULL, '2021-07-29 17:03:22', '2021-07-29 17:03:22'),
(56, 'App\\Models\\User', 1, 'my-app-token', 'a0b86d7eda9ff83726e364ffa5b58a507b0ade1b962ef0fbbf38ca89bbd9f52b', '[\"*\"]', NULL, '2021-07-29 17:55:44', '2021-07-29 17:55:44'),
(57, 'App\\Models\\User', 1, 'my-app-token', 'da9b2dcdc28bab67b302c330acb61f9bdf55b03772b377023f7a9962395d2cf1', '[\"*\"]', NULL, '2021-07-29 18:42:38', '2021-07-29 18:42:38'),
(58, 'App\\Models\\User', 1, 'my-app-token', '36aa0f7cedf7c5317624b61529aa4c9d8cbe5c5478f2cd5befa14a31fd0b3db4', '[\"*\"]', NULL, '2021-07-29 18:55:01', '2021-07-29 18:55:01'),
(59, 'App\\Models\\User', 1, 'my-app-token', '2e8365bd8b4a0d0f6c1e7789e0af544767b85efcad5e88a53db0f8cb8c8dd5aa', '[\"*\"]', NULL, '2021-07-29 19:59:25', '2021-07-29 19:59:25'),
(60, 'App\\Models\\User', 1, 'my-app-token', 'e7d31341acd652b3fe0fc02605532db9220f0b4a981d71b152bb62e087c8763a', '[\"*\"]', NULL, '2021-07-29 20:00:48', '2021-07-29 20:00:48'),
(61, 'App\\Models\\User', 1, 'my-app-token', 'ee86819184b75df26b77b167d086c24ca03d96b72bd10ab70fffe1f0352573b0', '[\"*\"]', NULL, '2021-07-29 20:01:06', '2021-07-29 20:01:06'),
(62, 'App\\Models\\User', 1, 'my-app-token', '3120d3b5d975e95e46ae6a6b00989eda897c677676b7b01719fbacc4045e4aed', '[\"*\"]', NULL, '2021-07-29 20:01:40', '2021-07-29 20:01:40'),
(63, 'App\\Models\\User', 1, 'my-app-token', '08c064baeb06c03042f9adee53207ef10e3710ae0e64fa205377cad7985bf579', '[\"*\"]', NULL, '2021-07-29 20:02:43', '2021-07-29 20:02:43'),
(64, 'App\\Models\\User', 1, 'my-app-token', '1fcbdf463500e64c0bf99e504f511a86ac23d66ca0a053854eeee250b7fc411c', '[\"*\"]', NULL, '2021-07-29 20:06:13', '2021-07-29 20:06:13'),
(65, 'App\\Models\\User', 1, 'my-app-token', '9184b454557c01bee5a38b8aa25de6b948334303aafd7c426a2cd290a0f80c5a', '[\"*\"]', NULL, '2021-07-29 21:20:18', '2021-07-29 21:20:18'),
(66, 'App\\Models\\User', 1, 'my-app-token', 'a4ec926805179a60e1da9691207c17acd65532e6f4f91927dc50b0fe431a5d6a', '[\"*\"]', NULL, '2021-07-29 21:34:01', '2021-07-29 21:34:01'),
(67, 'App\\Models\\User', 1, 'my-app-token', 'e28f259f751f2ca080472a246f3e5748f75931997cc24ef11badf4e08ce002c5', '[\"*\"]', NULL, '2021-07-29 21:34:46', '2021-07-29 21:34:46'),
(68, 'App\\Models\\User', 1, 'my-app-token', '1c5a02a7b2cfbaacd9fb69f6e52a70f2546691f58eca17f927bf66d2ee3711a5', '[\"*\"]', NULL, '2021-07-29 21:35:18', '2021-07-29 21:35:18'),
(69, 'App\\Models\\User', 1, 'my-app-token', '38c6333a8f898ef602709e2c434165aa7a254bf3c56d4c0f661f2e9645350ec1', '[\"*\"]', NULL, '2021-07-29 21:37:25', '2021-07-29 21:37:25'),
(70, 'App\\Models\\User', 1, 'my-app-token', '6cf76cc0f1bf137b5a87f5e7e8c0f8a08af3cb369a16843040b83201a2ea8457', '[\"*\"]', NULL, '2021-07-29 21:38:27', '2021-07-29 21:38:27'),
(71, 'App\\Models\\User', 1, 'my-app-token', 'b76d95c9e03f492f14ea54471a972dc1966a4312c31e510b83f02d2e064ff3cd', '[\"*\"]', NULL, '2021-07-29 21:39:31', '2021-07-29 21:39:31'),
(72, 'App\\Models\\User', 1, 'my-app-token', 'be42026247a90615cfc2613f7427fbe89109354fa04cf1bd8b2b7208e72503a1', '[\"*\"]', NULL, '2021-07-29 21:40:11', '2021-07-29 21:40:11'),
(73, 'App\\Models\\User', 1, 'my-app-token', '4820393275b217c2f1643cb79e70101ce725b028cbc336c941626756b58c3fa7', '[\"*\"]', NULL, '2021-07-29 21:41:26', '2021-07-29 21:41:26'),
(74, 'App\\Models\\User', 1, 'my-app-token', '10f4b29e75a1745fabdffe0d96c4870aec745304c91dbc2495df044f278824ee', '[\"*\"]', NULL, '2021-07-29 21:42:34', '2021-07-29 21:42:34'),
(75, 'App\\Models\\User', 1, 'my-app-token', '59313968ed01a29490f17c5c0283edd1a34efb8385adc81a486f0eb76f1a506e', '[\"*\"]', NULL, '2021-07-29 21:43:17', '2021-07-29 21:43:17'),
(76, 'App\\Models\\User', 1, 'my-app-token', '67eb8fe54f36a1d2a3d79d26590696d39f0a11c6ccc9e1a700d0c4ca30d73bf1', '[\"*\"]', NULL, '2021-07-29 21:45:02', '2021-07-29 21:45:02'),
(77, 'App\\Models\\User', 1, 'my-app-token', 'dd41ce802f2db0d171aae966bca687cce9f54d40aa55ef7c90301aa0c7879035', '[\"*\"]', NULL, '2021-07-29 21:46:52', '2021-07-29 21:46:52'),
(78, 'App\\Models\\User', 1, 'my-app-token', '4f38e7d80651c63dce8e867917ffe5d78138a5fc4edc98b307ef52a51d84335f', '[\"*\"]', NULL, '2021-07-29 22:11:35', '2021-07-29 22:11:35'),
(79, 'App\\Models\\User', 1, 'my-app-token', '17f3143d9ff233d76573dd190e205084453da33cb17a3e5202f4d779805fab4e', '[\"*\"]', NULL, '2021-07-29 22:23:50', '2021-07-29 22:23:50'),
(80, 'App\\Models\\User', 1, 'my-app-token', '5a5048d802497673bee59188688c84927b96f2350fd4a3648b6b3addf7f8f55d', '[\"*\"]', NULL, '2021-07-29 22:25:02', '2021-07-29 22:25:02'),
(81, 'App\\Models\\User', 1, 'my-app-token', '6b4030ab31239f035756673c6c7603a8334835e3d7cf220cac8e3afbe753234f', '[\"*\"]', NULL, '2021-07-29 22:25:34', '2021-07-29 22:25:34'),
(82, 'App\\Models\\User', 1, 'my-app-token', 'd2aee2685a67251b58d502ffe3c10c82c6719669caef20d5863f659526f28332', '[\"*\"]', NULL, '2021-07-29 22:25:59', '2021-07-29 22:25:59'),
(83, 'App\\Models\\User', 1, 'my-app-token', 'bd41e942cc2d03e29b2e8316d374d23f3402fbadf3c86ed1ea96d1e862a85037', '[\"*\"]', NULL, '2021-07-29 22:26:37', '2021-07-29 22:26:37'),
(84, 'App\\Models\\User', 1, 'my-app-token', '653e4b5a8ca02ad0d6babf4fa334402185a7caec39d90832bad68f7eb7369790', '[\"*\"]', NULL, '2021-07-29 22:27:28', '2021-07-29 22:27:28'),
(85, 'App\\Models\\User', 1, 'my-app-token', '26c8b0f1ac2158d610c7639f210b166734aba84eec9437e47d7b14e1decdc5bb', '[\"*\"]', NULL, '2021-07-29 22:27:56', '2021-07-29 22:27:56'),
(86, 'App\\Models\\User', 1, 'my-app-token', 'fcc949caf16000d18e6dcfac99a09291b1064c8f187b12a11edfe2f57544cc21', '[\"*\"]', NULL, '2021-07-29 22:34:06', '2021-07-29 22:34:06'),
(87, 'App\\Models\\User', 1, 'my-app-token', '5189c5cc30f8393d8f994d01002c6c86da726de3112e7aef70ef025350cc64ac', '[\"*\"]', NULL, '2021-07-29 22:40:53', '2021-07-29 22:40:53'),
(88, 'App\\Models\\User', 1, 'my-app-token', 'f1ffd437076aa5764e9918a08b35eef2cfba4e8f91fa9029e54ecc49b7d75728', '[\"*\"]', NULL, '2021-07-29 22:43:03', '2021-07-29 22:43:03'),
(89, 'App\\Models\\User', 1, 'my-app-token', '66aab59c9908bd78b4e9205a56a9929cec46c78a12e4bf5e18a67ca489e93467', '[\"*\"]', NULL, '2021-07-29 23:13:42', '2021-07-29 23:13:42'),
(90, 'App\\Models\\User', 1, 'my-app-token', '4e30c904f729228a7ce334c23b8da37e9e940b056af15e4603aa97def4350d83', '[\"*\"]', NULL, '2021-07-29 23:19:41', '2021-07-29 23:19:41'),
(91, 'App\\Models\\User', 1, 'my-app-token', '366415d11f42f9c064189a0c7a92e832633947a17b32c743e8b10c5238aacc72', '[\"*\"]', NULL, '2021-07-29 23:20:21', '2021-07-29 23:20:21'),
(92, 'App\\Models\\User', 1, 'my-app-token', '027c8a6d967edc14cf65be371ae404581955112807463b7f61141b92c72a9072', '[\"*\"]', NULL, '2021-07-29 23:33:49', '2021-07-29 23:33:49'),
(93, 'App\\Models\\User', 1, 'my-app-token', 'c87669d59d553947ea8ae821a71991d5118528df05d8bed94c9d73121404ce2c', '[\"*\"]', NULL, '2021-07-29 23:35:32', '2021-07-29 23:35:32'),
(94, 'App\\Models\\User', 1, 'my-app-token', '90429a6febc52cf5b274edd9941223eb049f7b32ec5297584ffbc17349ec1555', '[\"*\"]', NULL, '2021-07-29 23:36:50', '2021-07-29 23:36:50'),
(95, 'App\\Models\\User', 1, 'my-app-token', 'c9f6a54c5c75a8817a155bc95d94b0d774ba051e9ea7494d3f8daa6908a17fd4', '[\"*\"]', NULL, '2021-07-29 23:38:24', '2021-07-29 23:38:24'),
(96, 'App\\Models\\User', 1, 'my-app-token', 'aa850f5d100a7f53c5f1bc9703e25409a44e85b73d7e5d283216841a5dd8a7de', '[\"*\"]', NULL, '2021-07-29 23:38:49', '2021-07-29 23:38:49'),
(97, 'App\\Models\\User', 1, 'my-app-token', '76f8df81db0fbe67f71aacc2b90dc8d7285eeb878400a7366a7a4c7f8fc8ca99', '[\"*\"]', NULL, '2021-07-29 23:39:58', '2021-07-29 23:39:58'),
(98, 'App\\Models\\User', 1, 'my-app-token', 'af4abb354e16cc16809c5d90bc59b83aa5c7a13f4c4254339b1a62805424efa6', '[\"*\"]', NULL, '2021-07-29 23:41:37', '2021-07-29 23:41:37'),
(99, 'App\\Models\\User', 1, 'my-app-token', '7f47461f9d2bd0cca021e6c76e6e51673dfe313dd68f21556c7751981a7a7350', '[\"*\"]', NULL, '2021-07-29 23:46:16', '2021-07-29 23:46:16'),
(100, 'App\\Models\\User', 1, 'my-app-token', 'b7eb8db0455546293253d67d60a420e8b7f82f1a404b7dab027cae4dfa773f8e', '[\"*\"]', NULL, '2021-07-29 23:46:49', '2021-07-29 23:46:49'),
(101, 'App\\Models\\User', 1, 'my-app-token', '07cb5e3ff0a17e028dc200ea1cfa5f6dbe867684ac95d850f8141017856eade3', '[\"*\"]', NULL, '2021-07-29 23:48:03', '2021-07-29 23:48:03'),
(102, 'App\\Models\\User', 1, 'my-app-token', '1bfea70c65e8cd5a21ae94df0a6c1b9412a71457a38ab9859f6a0d44b4e33252', '[\"*\"]', NULL, '2021-07-29 23:53:19', '2021-07-29 23:53:19'),
(103, 'App\\Models\\User', 1, 'my-app-token', '4e6601ff126dfedfd857b60aa002f0354823654a670688cff12650134aeb23e6', '[\"*\"]', NULL, '2021-07-29 23:54:17', '2021-07-29 23:54:17'),
(104, 'App\\Models\\User', 1, 'my-app-token', '09342ce854986cb2706546bc91e354cec80e44d583ef0b18a144b24c5a0700b4', '[\"*\"]', NULL, '2021-07-29 23:55:46', '2021-07-29 23:55:46'),
(105, 'App\\Models\\User', 1, 'my-app-token', 'e2be89fd7682dcf8654a982a504c687f7062f2ffcb26b38ebcd31886b8877384', '[\"*\"]', NULL, '2021-07-30 00:12:54', '2021-07-30 00:12:54'),
(106, 'App\\Models\\User', 1, 'my-app-token', 'd39ad98519f9b74cfa1f35da504e4a7dcd4318defefb1110a96681b2adad15bc', '[\"*\"]', NULL, '2021-07-30 00:14:31', '2021-07-30 00:14:31'),
(107, 'App\\Models\\User', 1, 'my-app-token', 'c30264dd770eea03336a794f4831553a4168556bcffc76e2449852e6224d1236', '[\"*\"]', NULL, '2021-07-30 00:20:07', '2021-07-30 00:20:07'),
(108, 'App\\Models\\User', 1, 'my-app-token', '78a5efd1c11e6b9ee496a8666cd4fc2f1f6bfa76093a11f586b57b8a3252a748', '[\"*\"]', NULL, '2021-07-30 00:32:11', '2021-07-30 00:32:11'),
(109, 'App\\Models\\User', 1, 'my-app-token', '8d6d48e8f3e1f7bdf9d6e6b5ad1e82cde49d0bd8b143ea44be49818fe0fb8e75', '[\"*\"]', NULL, '2021-07-30 00:33:18', '2021-07-30 00:33:18'),
(110, 'App\\Models\\User', 1, 'my-app-token', '1b075e2422e7091547e0411f14daa1deb210612b5a0dcd0490fb9ce765d271ab', '[\"*\"]', NULL, '2021-07-30 01:16:40', '2021-07-30 01:16:40'),
(111, 'App\\Models\\User', 1, 'my-app-token', '833ec81b1394651320f297d610eb0812d0c8215d2707f7b0c4ded2698a357315', '[\"*\"]', NULL, '2021-07-30 01:21:07', '2021-07-30 01:21:07'),
(112, 'App\\Models\\User', 1, 'my-app-token', '78a28f2cf47c2a6e15d948dd70769b32889fbb2568e158a43228b04986bb5b9e', '[\"*\"]', NULL, '2021-07-30 01:55:52', '2021-07-30 01:55:52'),
(113, 'App\\Models\\User', 1, 'my-app-token', '179cb116b2513105a8282f29f01d60b072470110d007ac0b3788886286c9df74', '[\"*\"]', NULL, '2021-07-30 02:40:10', '2021-07-30 02:40:10'),
(114, 'App\\Models\\User', 1, 'my-app-token', '1b1d25d6b71ba001b27b939c5010a14aaeeba3c088e75f5ca8bbacfb777cc756', '[\"*\"]', NULL, '2021-07-30 04:38:19', '2021-07-30 04:38:19'),
(115, 'App\\Models\\User', 1, 'my-app-token', '21d5cd4db0e92c21c747641cabcbe848b54c6e77edacbc7dbaaafc9b36c4ddd6', '[\"*\"]', NULL, '2021-07-30 04:43:49', '2021-07-30 04:43:49'),
(116, 'App\\Models\\User', 1, 'my-app-token', '989e4dbeb09c4a599510bfc6a9565e61eb7c584e8bf1b6643ce3f04a6e992a91', '[\"*\"]', NULL, '2021-07-30 04:55:42', '2021-07-30 04:55:42'),
(117, 'App\\Models\\User', 1, 'my-app-token', '8c27de2dbfeddf578a27134f22fbbc47da29b0c6ee8c4f1e4eb424c4eeb538bd', '[\"*\"]', NULL, '2021-07-30 04:57:14', '2021-07-30 04:57:14'),
(118, 'App\\Models\\User', 1, 'my-app-token', '0453ff5b16ae78d13dbbb2aa1b21502d3ccb7ab0cd2b188b8a960e0d3efb24f1', '[\"*\"]', NULL, '2021-07-30 05:00:09', '2021-07-30 05:00:09'),
(119, 'App\\Models\\User', 1, 'my-app-token', '851c389adead3ec251c848e8dc7eacb1e158087dea75e85426372b480b072351', '[\"*\"]', NULL, '2021-07-30 05:00:12', '2021-07-30 05:00:12'),
(120, 'App\\Models\\User', 1, 'my-app-token', '00e4653c23b365b4e7b7b2e5e9ac81cb59aaa6fec32546d7e97eed020fd57288', '[\"*\"]', NULL, '2021-07-30 05:01:07', '2021-07-30 05:01:07'),
(121, 'App\\Models\\User', 1, 'my-app-token', 'd38a6a91095a7d0df44f647bc2152a7e6453854e8e3edb31cf9f74641bb5a393', '[\"*\"]', NULL, '2021-07-30 05:02:46', '2021-07-30 05:02:46'),
(122, 'App\\Models\\User', 1, 'my-app-token', 'a08455ad2f73221d6b4062d72ccc48eb3d1025f5b3fdcfb60b6eb0ff0d2bfc75', '[\"*\"]', NULL, '2021-07-30 05:02:47', '2021-07-30 05:02:47'),
(123, 'App\\Models\\User', 1, 'my-app-token', '53cbff2b9fcca6314d6be0758c32d8af6d17880e5e0a280c169cbda686eeeb70', '[\"*\"]', NULL, '2021-07-30 05:03:26', '2021-07-30 05:03:26'),
(124, 'App\\Models\\User', 1, 'my-app-token', 'c3b5d8be9ab2f9db3ae9fbef55c9715bc360aa8627a2a4be342b667e6962d501', '[\"*\"]', NULL, '2021-07-30 05:14:51', '2021-07-30 05:14:51'),
(125, 'App\\Models\\User', 1, 'my-app-token', '38382ab543762bbdad213a8cc9f8eacce1c9f120fd4df62267c24579426f3ebf', '[\"*\"]', NULL, '2021-07-30 05:34:45', '2021-07-30 05:34:45'),
(126, 'App\\Models\\User', 1, 'my-app-token', '47bdc5e1099568d50d90636ce9991dfae873c608b59702e55a93530ef80e088f', '[\"*\"]', NULL, '2021-07-30 06:02:03', '2021-07-30 06:02:03'),
(127, 'App\\Models\\User', 1, 'my-app-token', '6b0cd01019b1096c29948cb91aed16c49dbc65aa499b8ca627b8bc0a02e503da', '[\"*\"]', NULL, '2021-07-30 06:04:19', '2021-07-30 06:04:19'),
(128, 'App\\Models\\User', 1, 'my-app-token', 'c50810e06cb9c09e75f99b2dc44b82cadf69904eda46d3d2e2f15efeaddfdbe3', '[\"*\"]', NULL, '2021-07-30 06:39:09', '2021-07-30 06:39:09'),
(129, 'App\\Models\\User', 1, 'my-app-token', '1f724af1a6c1daa81587ae7577b10ca0e9f2ee76904082177fc5868eb1daede5', '[\"*\"]', NULL, '2021-07-30 07:03:15', '2021-07-30 07:03:15'),
(130, 'App\\Models\\User', 1, 'my-app-token', 'a01e88591b7b05a19cb5b12690dcd104bb4e16887bcbed2ef915b539fe39b635', '[\"*\"]', NULL, '2021-07-30 14:57:48', '2021-07-30 14:57:48'),
(131, 'App\\Models\\User', 1, 'my-app-token', '8d6bc5f3e39b6c3a9d11e2c7d28192c227ed585397db43867fd98749bbabe4fa', '[\"*\"]', NULL, '2021-07-30 18:38:19', '2021-07-30 18:38:19'),
(132, 'App\\Models\\User', 1, 'my-app-token', '4521783972ce97a41c6ee6e5e291852a4703284271fab754e2347301c6ce4af1', '[\"*\"]', NULL, '2021-07-30 18:38:42', '2021-07-30 18:38:42'),
(133, 'App\\Models\\User', 1, 'my-app-token', 'e45bca33e6f4d6391e7f4e3e42b316f5cf6bc246518570e1ea6ac9e669455858', '[\"*\"]', NULL, '2021-07-30 19:54:08', '2021-07-30 19:54:08'),
(134, 'App\\Models\\User', 1, 'my-app-token', '6d58cff6836d46177683593651112501bf29b9469e0b722577a78d45c3691c1b', '[\"*\"]', NULL, '2021-07-30 20:07:18', '2021-07-30 20:07:18'),
(135, 'App\\Models\\User', 1, 'my-app-token', 'f3a8b2a53d4771966eec203cb6d7161559ed92530ea18aac31974bede9f604d6', '[\"*\"]', NULL, '2021-07-30 22:02:17', '2021-07-30 22:02:17'),
(136, 'App\\Models\\User', 1, 'my-app-token', '5e5dbcc39473e28ce9b11a34e7933632aba1934b02e0c38c4a076da9c3a76e0f', '[\"*\"]', NULL, '2021-07-30 22:07:43', '2021-07-30 22:07:43'),
(137, 'App\\Models\\User', 1, 'my-app-token', '3911f49404442001272f14dcec3aac2c227a3b52cfd4c45401a280749ea3cb9c', '[\"*\"]', NULL, '2021-07-30 22:53:41', '2021-07-30 22:53:41'),
(138, 'App\\Models\\User', 1, 'my-app-token', '1eb7bd1761ab4bef8f7b5a72cdc20d2409d4cfaa856440de08dff42d5d186855', '[\"*\"]', NULL, '2021-07-30 22:57:00', '2021-07-30 22:57:00'),
(139, 'App\\Models\\User', 1, 'my-app-token', 'afebae34365d656e1f272aeb08a2f485018da3a84ff403634cd09531beff1961', '[\"*\"]', NULL, '2021-07-30 23:55:50', '2021-07-30 23:55:50'),
(140, 'App\\Models\\User', 1, 'my-app-token', '5d9eed6211ff8dc54bcc2021625994155cfc1981de0c1707881c4cf1793bf083', '[\"*\"]', NULL, '2021-07-30 23:59:27', '2021-07-30 23:59:27'),
(141, 'App\\Models\\User', 1, 'my-app-token', '35c458fd892bbfe74989604f6080e9af079b704c28b4f9b7b7054d71bebce9d1', '[\"*\"]', NULL, '2021-07-31 00:01:14', '2021-07-31 00:01:14'),
(142, 'App\\Models\\User', 1, 'my-app-token', 'fa2c1af0a17553168907d77d6e49ccdffdd2412ff0251832a233b026d2566091', '[\"*\"]', NULL, '2021-07-31 00:32:04', '2021-07-31 00:32:04'),
(143, 'App\\Models\\User', 1, 'my-app-token', '0811cdcf6f55758abeca9493e48cddaa70a265659b1eb25ee03a51bfdacbebc6', '[\"*\"]', NULL, '2021-07-31 00:34:11', '2021-07-31 00:34:11'),
(144, 'App\\Models\\User', 1, 'my-app-token', '999e3aabb727d9417f7575877f36923db4e9bf0fa26ed47facc97252ff0c24e7', '[\"*\"]', NULL, '2021-07-31 00:50:02', '2021-07-31 00:50:02'),
(145, 'App\\Models\\User', 1, 'my-app-token', 'e24c6ab1c20fc5b4b40849c7f15eaaed6c69a748aabf0aa414e8a5df66fc1d46', '[\"*\"]', NULL, '2021-07-31 01:26:02', '2021-07-31 01:26:02'),
(146, 'App\\Models\\User', 1, 'my-app-token', '9c995c7dfbb458268cbd924bb548d7fbceebfc9d39b1a02fa6e573697ad9ea9b', '[\"*\"]', NULL, '2021-07-31 02:03:36', '2021-07-31 02:03:36'),
(147, 'App\\Models\\User', 1, 'my-app-token', 'b0b77510df34d00d41e4be6790443d224f21704ecf614a7c167138450f1617ab', '[\"*\"]', NULL, '2021-07-31 02:04:16', '2021-07-31 02:04:16'),
(148, 'App\\Models\\User', 1, 'my-app-token', '866cb56695b0bf84aa3e2704008e63727079958d8609f50464da66d3d2be1275', '[\"*\"]', NULL, '2021-07-31 02:06:45', '2021-07-31 02:06:45'),
(149, 'App\\Models\\User', 1, 'my-app-token', 'ad18a975d46dbb30907f31c48d5c7c0e3a36877dd941f5fd218c84e980496ef8', '[\"*\"]', NULL, '2021-07-31 02:07:17', '2021-07-31 02:07:17'),
(150, 'App\\Models\\User', 1, 'my-app-token', '3939862fb481eb02a658eb204a5238d3e6bb34604257aa8ae36fdc88c0ebebff', '[\"*\"]', NULL, '2021-07-31 04:25:20', '2021-07-31 04:25:20'),
(151, 'App\\Models\\User', 1, 'my-app-token', '0d29e0aa7bb17a1cb9b6bc145ba5c1e06e566cafa221cebdd0bddd4a3df5f56b', '[\"*\"]', NULL, '2021-07-31 05:14:16', '2021-07-31 05:14:16'),
(152, 'App\\Models\\User', 1, 'my-app-token', 'c74a7fc1469be7958ec91d146405d50c2eef3e9fd6955bbcd028f55e9d2a3689', '[\"*\"]', NULL, '2021-07-31 05:16:47', '2021-07-31 05:16:47'),
(153, 'App\\Models\\User', 1, 'my-app-token', '9c45a432afa3a4bc0f6a98ee58b2bd4c0a5c1416baea26be48a6714a7d43931c', '[\"*\"]', NULL, '2021-07-31 05:25:55', '2021-07-31 05:25:55'),
(154, 'App\\Models\\User', 1, 'my-app-token', '3c3d32185fc6fe479269d9e11fd2ad6919e4cf7253c6cd8d82acd3eef27367e3', '[\"*\"]', NULL, '2021-07-31 05:26:50', '2021-07-31 05:26:50'),
(155, 'App\\Models\\User', 1, 'my-app-token', '138a38dabe0d7bd96a3c7c6deb3588cea284a5e4ba1e75974682df58ec86403e', '[\"*\"]', NULL, '2021-07-31 05:27:13', '2021-07-31 05:27:13'),
(156, 'App\\Models\\User', 1, 'my-app-token', '640ce8c232bb4204f74dfbeecef9e297cd9f4bb2b1310d66738f537832ef5254', '[\"*\"]', NULL, '2021-07-31 05:27:32', '2021-07-31 05:27:32'),
(157, 'App\\Models\\User', 1, 'my-app-token', 'edbb8ce099760d95f77c45afdb9ca50c85feb86297536a84fdad878aeaed79bd', '[\"*\"]', NULL, '2021-07-31 05:32:15', '2021-07-31 05:32:15'),
(158, 'App\\Models\\User', 1, 'my-app-token', 'e7a5a25609cdc577a8f342c3537ede36c95b2a8a38aacbdeb9fa83329c6a8bad', '[\"*\"]', NULL, '2021-07-31 19:33:05', '2021-07-31 19:33:05'),
(159, 'App\\Models\\User', 1, 'my-app-token', '46292e23cf4eb1b3f389e5b6075df3d0ece713960c93beb49372dac772882db1', '[\"*\"]', NULL, '2021-07-31 19:39:21', '2021-07-31 19:39:21'),
(160, 'App\\Models\\User', 1, 'my-app-token', '07811cd2e0a94ee66b5d8a6b4c90a4f266025cc8c4e40f649a8c78a44fc79192', '[\"*\"]', NULL, '2021-08-03 17:30:48', '2021-08-03 17:30:48'),
(161, 'App\\Models\\User', 1, 'my-app-token', 'ede482d0e1c73966095596c5286e9f9bdc878dd920e990976d5d1f4963c368e7', '[\"*\"]', NULL, '2021-08-03 17:32:30', '2021-08-03 17:32:30'),
(162, 'App\\Models\\User', 1, 'my-app-token', '234cf6dd24559f5126caa6a488a8b0d0ddfa08722f2e0e16846421ed3525c69d', '[\"*\"]', NULL, '2021-08-03 17:33:42', '2021-08-03 17:33:42'),
(163, 'App\\Models\\User', 1, 'my-app-token', 'eccfb41d87400eeaf1ed3edeb6da6d686f8e4247adba63170b1f5b8205f048f7', '[\"*\"]', NULL, '2021-08-03 17:37:22', '2021-08-03 17:37:22'),
(164, 'App\\Models\\User', 1, 'my-app-token', '7c17e36110f59e998fac42e45ee0b0451ad2010aead2d1b12862b61cbc9078ad', '[\"*\"]', NULL, '2021-08-03 17:37:29', '2021-08-03 17:37:29'),
(165, 'App\\Models\\User', 1, 'my-app-token', '4b5043f4a8431cd0086cd417d1329d8a1e944074ead8cee64582a73eb9b80ab6', '[\"*\"]', NULL, '2021-08-03 17:37:31', '2021-08-03 17:37:31'),
(166, 'App\\Models\\User', 1, 'my-app-token', 'ea46a73aee43888f891db26d93271c0efd0bfa4e4d6c7524b548b5a88b66e73b', '[\"*\"]', NULL, '2021-08-03 17:37:33', '2021-08-03 17:37:33'),
(167, 'App\\Models\\User', 1, 'my-app-token', '2596c87261f9b1a25288cc418e781c0a684d2ca73d8b42f8f059fbd2230ab056', '[\"*\"]', NULL, '2021-08-03 17:37:42', '2021-08-03 17:37:42'),
(168, 'App\\Models\\User', 1, '4BVcROY4WW', 'e42b452954379ee4c49a6712cd3b38fa7eb9328bd5030c616144bac34bb6b62c', '[\"*\"]', NULL, '2021-08-06 03:14:01', '2021-08-06 03:14:01'),
(169, 'App\\Models\\User', 1, 'UF050A0OmT', '406be8d68d39d95c6200e441bea840c3b9d70c8425ded6abff95cfe87b7bf924', '[\"*\"]', NULL, '2021-08-06 03:15:57', '2021-08-06 03:15:57'),
(170, 'App\\Models\\User', 1, 'OmjfsXI5Kj', '899602f6d8801337970b6e389f17e1502914b73b78af06594936a8b2e56155a6', '[\"*\"]', NULL, '2021-08-06 03:17:48', '2021-08-06 03:17:48');

-- --------------------------------------------------------

--
-- Table structure for table `place_bids`
--

CREATE TABLE `place_bids` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `your_bid_price` varchar(20) DEFAULT NULL,
  `shipping_option` varchar(100) DEFAULT NULL,
  `payment_methode` varchar(100) DEFAULT NULL,
  `reminder_email` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `place_bids`
--

INSERT INTO `place_bids` (`id`, `user_id`, `product_id`, `your_bid_price`, `shipping_option`, `payment_methode`, `reminder_email`, `created_at`, `updated_at`) VALUES
(1, 44, 4, NULL, NULL, NULL, NULL, '2021-08-09 12:28:06', '2021-08-09 12:28:06'),
(2, 44, 8, NULL, NULL, NULL, NULL, '2021-08-09 12:30:51', '2021-08-09 12:30:51'),
(3, 44, 8, '5001', 'asdas', 'asd', 'sad', '2021-08-09 12:34:30', '2021-08-09 12:34:30'),
(4, 44, 9, '1281', 'buyer_pick_up', 'Case on Delivery', 'reminder_email', '2021-08-09 12:39:52', '2021-08-09 12:39:52'),
(5, 44, 9, '1281', 'New ZealandAukaland', 'Case on Delivery', 'reminder_email', '2021-08-09 23:51:05', '2021-08-09 23:51:05'),
(6, 44, 8, '501', 'New ZealandAukaland', 'Case on Delivery', 'reminder_email', '2021-08-11 04:03:19', '2021-08-11 04:03:19'),
(7, 44, 8, '501', 'New ZealandAukaland', 'Case on Delivery', 'reminder_email', '2021-08-11 04:17:12', '2021-08-11 04:17:12');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `pro_id` int(11) UNSIGNED NOT NULL,
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
  `add_to_cart_option` varchar(4) DEFAULT NULL,
  `shipping_option` varchar(20) DEFAULT NULL,
  `free_option` varchar(4) DEFAULT NULL,
  `status` varchar(1) NOT NULL DEFAULT 'P',
  `is_approve` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`pro_id`, `user_id`, `name`, `shrt_name`, `qty`, `discount`, `discounted_price`, `sub_catg_id`, `brand`, `catg_id`, `long_des`, `short_des`, `price`, `size`, `color`, `image`, `type`, `bid_option`, `add_to_cart_option`, `shipping_option`, `free_option`, `status`, `is_approve`, `created_at`, `updated_at`, `deleted_at`) VALUES
(4, 1, 'Renault Triber RXZ, 2019, Petrol', 'Renault Triber RXZ, 2019, Petrol', '2', '10', '450', '4', '1', 2, '<h3>Description</h3>\r\n\r\n<p>ADDITIONAL VEHICLE INFORMATION:</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>ABS: Yes</p>\r\n\r\n<p>Accidental: No</p>\r\n\r\n<p>Air Conditioning: With Heater</p>\r\n\r\n<p>Number of Airbags: 2 airbags</p>\r\n\r\n<p>Battery Condition: New</p>\r\n\r\n<p>Bluetooth: Yes</p>\r\n\r\n<p>Vehicle Certified: Yes</p>\r\n\r\n<p>Color: Silver</p>\r\n\r\n<p>Insurance Type: Comprehensive</p>\r\n\r\n<p>Lock System: Remote Controlled Central</p>\r\n\r\n<p>Make Month: September</p>\r\n\r\n<p>Power steering: Yes</p>\r\n\r\n<p>Power Windows: Front &amp; rear</p>\r\n\r\n<p>AM/FM Radio: Yes</p>\r\n\r\n<p>Registration Place: MH</p>\r\n\r\n<p>Exchange: Yes</p>\r\n\r\n<p>Finance: Yes</p>\r\n\r\n<p>Service History: Available</p>\r\n\r\n<p>Tyre Condition: New</p>', '<h3>Description</h3>\r\n\r\n<p>ADDITIONAL VEHICLE INFORMATION:</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>ABS: Yes</p>\r\n\r\n<p>Accidental: No</p>\r\n\r\n<p>Air Conditioning: With Heater</p>\r\n\r\n<p>Number of Airbags: 2 airbags</p>\r\n\r\n<p>Battery Condition: New</p>\r\n\r\n<p>Bluetooth: Yes</p>\r\n\r\n<p>Vehicle Certified: Yes</p>\r\n\r\n<p>Color: Silver</p>\r\n\r\n<p>Insurance Type: Comprehensive</p>\r\n\r\n<p>Lock System: Remote Controlled Central</p>\r\n\r\n<p>Make Month: September</p>\r\n\r\n<p>Power steering: Yes</p>\r\n\r\n<p>Power Windows: Front &amp; rear</p>\r\n\r\n<p>AM/FM Radio: Yes</p>\r\n\r\n<p>Registration Place: MH</p>\r\n\r\n<p>Exchange: Yes</p>\r\n\r\n<p>Finance: Yes</p>\r\n\r\n<p>Service History: Available</p>\r\n\r\n<p>Tyre Condition: New</p>', 500.00, '[\"X\"]', 'null', NULL, 'Medium', 'No', NULL, NULL, NULL, 'A', 0, '2021-07-16 15:36:01', '2021-08-10 12:32:34', NULL),
(8, 11, 'HP EliteBook Folio 9480m i5 4310U 2.0Ghz 8GB 120GB SSD 14\"HD USB 3.0 W10', 'HP EliteBook Folio 9480m i5 4310U 2.0Ghz 8GB 120GB SSD 14\"HD USB 3.0 W10', '12', '25', '375', '4', '1', 2, '<p>HP EliteBook Folio 9480m</p>\r\n\r\n<p>Ex Lease Refurbished Business Laptop</p>\r\n\r\n<p>Note: Re-installed and tested (Excellent working condition). Minor cosmetic wear and tear from use. No damage.</p>\r\n\r\n<p>Everything a business Ultrabook&trade; should be. Travel light at full power. HP&rsquo;s first business Ultrabook&trade; with docking capabilities included, the HP EliteBook Folio keeps you productive from the airport to the desktop. Resume from sleep quickly and knock out projects fast. With long battery life, you can keep up with whatever the day brings. Enterprise ready. IT friendly. All business.</p>\r\n\r\n<p>Specification:</p>\r\n\r\n<ul>\r\n	<li>Processor: Intel&reg; Core&trade; i5-4310U with Intel HD Graphics 4400 (2 GHz Up to 3 GHz with Intel Turbo Boost Technology, 3 MB cache, 2 cores)</li>\r\n	<li>Core: 2 @ 2.0GHz each Turbo Boost 2.7Ghz</li>\r\n	<li>Threads: 4</li>\r\n	<li>Memory: 8GB DDR3</li>\r\n	<li>Max Ram Upgradable: 16GB DDR3</li>\r\n	<li>Storage Drive: 120GB SSD</li>\r\n	<li>Optical Drive: None</li>\r\n	<li>Intel HD 4400 Graphics</li>\r\n	<li>14 inches LED diagonal wide-viewing angle anti-glare</li>\r\n	<li>Wireless LAN, Bluetooth&reg; 2.1</li>\r\n	<li>Network: Fast Ethernet card</li>\r\n	<li>Integrated dual-microphone array</li>\r\n	<li>Internal Stereo Speakers High Definition Audio</li>\r\n	<li>VGA Port</li>\r\n	<li>Webcam: 2MP camera</li>\r\n	<li>2 &ndash; USB 3.0 Port</li>\r\n	<li>1 &ndash; USB 2.0 Port</li>\r\n	<li>Weight: 1.6Kg</li>\r\n</ul>\r\n\r\n<p>Software installed:</p>\r\n\r\n<ul>\r\n	<li>Windows 10 Pro (Genuine Win 8 Pro COA Attached)</li>\r\n	<li>Drivers installed</li>\r\n</ul>\r\n\r\n<p>This machine is Windows 10 Capable</p>\r\n\r\n<p>Items Included: HP Elitebook Folio 9480m Business Laptop 1 X Genuine HP Adapter</p>\r\n\r\n<ul>\r\n	<li>photo sample only</li>\r\n	<li>3 Months Hardware warranty (Return to Base) excludes Software.</li>\r\n	<li>Please Note Battery and Adapter for Laptops are not covered under warranty as they are regarded as consumables</li>\r\n</ul>\r\n\r\n<p>NZ PC Clearance Terms of Services Apply</p>\r\n\r\n<p>Details</p>', '<p>HP EliteBook Folio 9480m</p>\r\n\r\n<p>Ex Lease Refurbished Business Laptop</p>\r\n\r\n<p>Note: Re-installed and tested (Excellent working condition). Minor cosmetic wear and tear from use. No damage.</p>\r\n\r\n<p>Everything a business Ultrabook&trade; should be. Travel light at full power. HP&rsquo;s first business Ultrabook&trade; with docking capabilities included, the HP EliteBook Folio keeps you productive from the airport to the desktop. Resume from sleep quickly and knock out projects fast. With long battery life, you can keep up with whatever the day brings. Enterprise ready. IT friendly. All business.</p>\r\n\r\n<p>Specification:</p>\r\n\r\n<ul>\r\n	<li>Processor: Intel&reg; Core&trade; i5-4310U with Intel HD Graphics 4400 (2 GHz Up to 3 GHz with Intel Turbo Boost Technology, 3 MB cache, 2 cores)</li>\r\n	<li>Core: 2 @ 2.0GHz each Turbo Boost 2.7Ghz</li>\r\n	<li>Threads: 4</li>\r\n	<li>Memory: 8GB DDR3</li>\r\n	<li>Max Ram Upgradable: 16GB DDR3</li>\r\n	<li>Storage Drive: 120GB SSD</li>\r\n	<li>Optical Drive: None</li>\r\n	<li>Intel HD 4400 Graphics</li>\r\n	<li>14 inches LED diagonal wide-viewing angle anti-glare</li>\r\n	<li>Wireless LAN, Bluetooth&reg; 2.1</li>\r\n	<li>Network: Fast Ethernet card</li>\r\n	<li>Integrated dual-microphone array</li>\r\n	<li>Internal Stereo Speakers High Definition Audio</li>\r\n	<li>VGA Port</li>\r\n	<li>Webcam: 2MP camera</li>\r\n	<li>2 &ndash; USB 3.0 Port</li>\r\n	<li>1 &ndash; USB 2.0 Port</li>\r\n	<li>Weight: 1.6Kg</li>\r\n</ul>\r\n\r\n<p>Software installed:</p>\r\n\r\n<ul>\r\n	<li>Windows 10 Pro (Genuine Win 8 Pro COA Attached)</li>\r\n	<li>Drivers installed</li>\r\n</ul>\r\n\r\n<p>This machine is Windows 10 Capable</p>\r\n\r\n<p>Items Included: HP Elitebook Folio 9480m Business Laptop 1 X Genuine HP Adapter</p>\r\n\r\n<ul>\r\n	<li>photo sample only</li>\r\n	<li>3 Months Hardware warranty (Return to Base) excludes Software.</li>\r\n	<li>Please Note Battery and Adapter for Laptops are not covered under warranty as they are regarded as consumables</li>\r\n</ul>\r\n\r\n<p>NZ PC Clearance Terms of Services Apply</p>\r\n\r\n<p>Details</p>', 500.00, '[\"M\"]', '[null]', NULL, NULL, 'Both', NULL, NULL, NULL, 'A', 0, '2021-07-20 04:07:50', '2021-07-20 04:08:46', NULL),
(9, 1, 'Vanity 1200mm Matte White Villa Stone top & counter top basin$1280 ! ! ! [DANIK]', 'Vanity 1200mm Matte White Villa Stone top & counter top basin$1280 ! ! ! [DANIK]', '5', '30', '896', '3', '1', 5, '<p>MOdel :HM1200FS-STONE Coming with plenty of storage space, this beautiful Hamton&#39;s styled and highly functional vanity will really hit the mark in your stunning bathroom.</p>\r\n\r\n<p>Dimensions: 1200mm (W) x 465mm (D) x 895mm (H)</p>\r\n\r\n<p>PLEASE NOTE BASIN POSITION IS CENTER NOT SIDE</p>\r\n\r\n<p>Snow white top K3202GW</p>\r\n\r\n<p>-Package including: Top: Engineering stone top, pre cut off (snow white/diamond white/diamond black) Pop-up waste: Black/chrome pop-up waste included. Basin: Matt white counter top(as showing in the photo) Tap: Tall tap with chrome top and black body (as showing in the photo) Cabinet: (pre-assembled) matte white moisture resistant color on high-quality MDF. Doors and drawer: 3 doors with 2 soft closing drawers. All legs made by solid wood. Handles: Beautiful dark brass finish knobs. <strong>*<em>We also offer different color for stone top and different shape for counter top as showing in the last two photos. Default for this listing is with diamond black stone top and matt white counter top. Please feel free to contact us if you need more information. *</em></strong></p>\r\n\r\n<p>Warranty - 5 years</p>\r\n\r\n<p>Please note: Dimensions are approximate (including the tone top). Please measure before installing. We can customized stone top Please feel free to contact us if you need more information.</p>\r\n\r\n<p>Our showroom in 127D Pilkington Road, Panmure ,Auckland</p>\r\n\r\n<p>Open hours: Monday &ndash; Saturday 9:00am - 5:00pm, Sunday ClOSED</p>\r\n\r\n<p>If you have not received your goods in 7 days after you made your payment, please notify us.</p>\r\n\r\n<p>ABOUT US: As a specialist in bathroom ware, Frameless Glass Shower, and Shower Fittings, the Danik brand has been in Auckland around 2 decades since 2001.</p>\r\n\r\n<p>Our range includes: BATHROOM WARE &amp; HOME DESIGNED FURNISHING MIRRORS......</p>', '<p>MOdel :HM1200FS-STONE Coming with plenty of storage space, this beautiful Hamton&#39;s styled and highly functional vanity will really hit the mark in your stunning bathroom.</p>\r\n\r\n<p>Dimensions: 1200mm (W) x 465mm (D) x 895mm (H)</p>\r\n\r\n<p>PLEASE NOTE BASIN POSITION IS CENTER NOT SIDE</p>\r\n\r\n<p>Snow white top K3202GW</p>\r\n\r\n<p>-Package including: Top: Engineering stone top, pre cut off (snow white/diamond white/diamond black) Pop-up waste: Black/chrome pop-up waste included. Basin: Matt white counter top(as showing in the photo) Tap: Tall tap with chrome top and black body (as showing in the photo) Cabinet: (pre-assembled) matte white moisture resistant color on high-quality MDF. Doors and drawer: 3 doors with 2 soft closing drawers. All legs made by solid wood. Handles: Beautiful dark brass finish knobs. <strong>*<em>We also offer different color for stone top and different shape for counter top as showing in the last two photos. Default for this listing is with diamond black stone top and matt white counter top. Please feel free to contact us if you need more information. *</em></strong></p>\r\n\r\n<p>Warranty - 5 years</p>\r\n\r\n<p>Please note: Dimensions are approximate (including the tone top). Please measure before installing. We can customized stone top Please feel free to contact us if you need more information.</p>\r\n\r\n<p>Our showroom in 127D Pilkington Road, Panmure ,Auckland</p>\r\n\r\n<p>Open hours: Monday &ndash; Saturday 9:00am - 5:00pm, Sunday ClOSED</p>\r\n\r\n<p>If you have not received your goods in 7 days after you made your payment, please notify us.</p>\r\n\r\n<p>ABOUT US: As a specialist in bathroom ware, Frameless Glass Shower, and Shower Fittings, the Danik brand has been in Auckland around 2 decades since 2001.</p>\r\n\r\n<p>Our range includes: BATHROOM WARE &amp; HOME DESIGNED FURNISHING MIRRORS......</p>', 1280.00, '[\"X\"]', 'null', NULL, NULL, 'Yes', NULL, NULL, NULL, 'A', 0, '2021-08-09 05:48:56', '2021-08-09 05:59:53', NULL),
(10, 1, 'HP EliteDesk 800 G1 Desktop PC (i7)', 'HP EliteDesk 800 G1 Desktop PC (i7)', '10', '5', '380', '3', NULL, 2, '<p>HP EliteDesk 800 G1 Desktop PC Intel Core i7 Processor (4 core - 4.0Ghz) 8GB Memory Intel Gigabit LAN Intel HD Graphics 256GB Solid State Drive Windows 10 Professional</p>\r\n\r\n<p>This is a refurbished desktop from our fleet of rental/lease equipment. This device has been fully tested and has a new installation of Windows 10, with all the latest updates and security patches for the operating system.</p>\r\n\r\n<p>Warranty Details: 90 Day Part&rsquo;s Only Warranty, Software Support Not Included, Return to Base with Right to Repair, Replace or Refund the Purchase Price</p>\r\n\r\n<p><strong><em>Important Notes</em></strong></p>\r\n\r\n<p>Payment must be made within 5 business days of auction/sale finishing or goods will be relisted.</p>\r\n\r\n<p>Usually we see cleared payment, either through Trade me or in our bank account, the day after purchase. We do our very best to get items on the courier that same day but items will definitely be dispatched within 2 working days of payment being cleared.</p>', '<p>HP EliteDesk 800 G1 Desktop PC Intel Core i7 Processor (4 core - 4.0Ghz) 8GB Memory Intel Gigabit LAN Intel HD Graphics 256GB Solid State Drive Windows 10 Professional</p>\r\n\r\n<p>This is a refurbished desktop from our fleet of rental/lease equipment. This device has been fully tested and has a new installation of Windows 10, with all the latest updates and security patches for the operating system.</p>\r\n\r\n<p>Warranty Details: 90 Day Part&rsquo;s Only Warranty, Software Support Not Included, Return to Base with Right to Repair, Replace or Refund the Purchase Price</p>\r\n\r\n<p><strong><em>Important Notes</em></strong></p>\r\n\r\n<p>Payment must be made within 5 business days of auction/sale finishing or goods will be relisted.</p>\r\n\r\n<p>Usually we see cleared payment, either through Trade me or in our bank account, the day after purchase. We do our very best to get items on the courier that same day but items will definitely be dispatched within 2 working days of payment being cleared.</p>', 400.00, '[\"X\"]', 'null', NULL, 'Medium', 'No', NULL, NULL, NULL, 'A', 0, '2021-08-10 03:33:01', '2021-08-10 12:07:14', NULL),
(11, 85, 'Refurbished I Phone 8 Plus Indenpendence Day offer Available good pri', 'Refurbished I Phone 8 Plus Indenpendence Day offer Available good pri', '1', '10', '450', '7', '1', 5, '<p>256 GB ROM</p>\r\n\r\n<p>13.97 cm (5.5 inch) Retina HD Display</p>\r\n\r\n<p>12MP + 12MP | 7MP Front Camera</p>\r\n\r\n<p>A11 Bionic Chip with 64-bit Architecture, Neural Engine,</p>\r\n\r\n<p>Embedded M11 Motion Coprocessor Processor</p>\r\n\r\n<p>Cod Available*</p>\r\n\r\n<p>WE are dealing in new product also*</p>\r\n\r\n<p>Hurry up Limited stock available*</p>', '<p>256 GB ROM</p>\r\n\r\n<p>13.97 cm (5.5 inch) Retina HD Display</p>\r\n\r\n<p>12MP + 12MP | 7MP Front Camera</p>\r\n\r\n<p>A11 Bionic Chip with 64-bit Architecture, Neural Engine,</p>\r\n\r\n<p>Embedded M11 Motion Coprocessor Processor</p>\r\n\r\n<p>Cod Available*</p>\r\n\r\n<p>WE are dealing in new product also*</p>\r\n\r\n<p>Hurry up Limited stock available*</p>', 500.00, '[\"X\"]', '[\"Yellow\"]', NULL, 'Old', 'Yes', NULL, NULL, NULL, 'A', 0, '2021-08-15 07:34:08', '2021-08-15 07:34:51', NULL),
(12, 43, 'iPhone 6 Plus', 'iPhone 6 Plus', '2', '5', '285', '7', '1', 5, '<p>WHY US? &lt;&lt;&lt;&lt; 100% NZ registered company &gt;&gt;&gt;&gt; &lt;&lt;&lt;&lt; Local Support Services &gt;&gt;&gt;&gt; &lt;&lt;&lt;&lt; 10 Years Top Seller on TradeMe &gt;&gt;&gt;&gt; &lt;&lt;&lt;&lt; 7*24 Prompt Service &gt;&gt;&gt;&gt;</p>\r\n\r\n<ul>\r\n	<li>FEATURES *</li>\r\n	<li>Perfect working order</li>\r\n	<li>Unlocked phones: this iPhone 6 plus is factory unlocked</li>\r\n	<li>Item Condition: This iPhone 6 plus is Refurbished, Agrade, in excellent condition</li>\r\n	<li>Network available: Any network</li>\r\n	<li>PACKAGE INCLUDES *</li>\r\n	<li>Apple iPhone 6 Plus 16GB</li>\r\n	<li>Box</li>\r\n	<li>Battery</li>\r\n	<li>Wall Charger</li>\r\n	<li>USB Cable</li>\r\n	<li>Earphones</li>\r\n	<li>Case+ screen cover</li>\r\n	<li>LAYBY AVAILABLE * $100 deposit must be paid within three days, and the rest paid within 12 weeks (12 weeks means maximum term, actually you can pay it off earlier). OR arrange your payment in 12 weeks</li>\r\n</ul>\r\n\r\n<p>Apple iPhone 6 plus 64GB#</p>\r\n\r\n<ul>\r\n	<li>WARRANTY * 12 months warranty (except for physical damage, water damage &amp; misusage)</li>\r\n</ul>\r\n\r\n<p>We open Monday to Friday 10am - 6pm Saturday 11am - 6pm</p>', '<p>WHY US? &lt;&lt;&lt;&lt; 100% NZ registered company &gt;&gt;&gt;&gt; &lt;&lt;&lt;&lt; Local Support Services &gt;&gt;&gt;&gt; &lt;&lt;&lt;&lt; 10 Years Top Seller on TradeMe &gt;&gt;&gt;&gt; &lt;&lt;&lt;&lt; 7*24 Prompt Service &gt;&gt;&gt;&gt;</p>\r\n\r\n<ul>\r\n	<li>FEATURES *</li>\r\n	<li>Perfect working order</li>\r\n	<li>Unlocked phones: this iPhone 6 plus is factory unlocked</li>\r\n	<li>Item Condition: This iPhone 6 plus is Refurbished, Agrade, in excellent condition</li>\r\n	<li>Network available: Any network</li>\r\n	<li>PACKAGE INCLUDES *</li>\r\n	<li>Apple iPhone 6 Plus 16GB</li>\r\n	<li>Box</li>\r\n	<li>Battery</li>\r\n	<li>Wall Charger</li>\r\n	<li>USB Cable</li>\r\n	<li>Earphones</li>\r\n	<li>Case+ screen cover</li>\r\n	<li>LAYBY AVAILABLE * $100 deposit must be paid within three days, and the rest paid within 12 weeks (12 weeks means maximum term, actually you can pay it off earlier). OR arrange your payment in 12 weeks</li>\r\n</ul>\r\n\r\n<p>Apple iPhone 6 plus 64GB#</p>\r\n\r\n<ul>\r\n	<li>WARRANTY * 12 months warranty (except for physical damage, water damage &amp; misusage)</li>\r\n</ul>\r\n\r\n<p>We open Monday to Friday 10am - 6pm Saturday 11am - 6pm</p>', 300.00, '[\"xx\"]', '[\"Yellow\"]', NULL, 'Medium', 'Both', NULL, NULL, NULL, 'A', 0, '2021-08-15 21:57:17', '2021-08-15 22:06:10', NULL),
(13, 1, 'sdf', NULL, '2', '5', '307.8', '3', '1', 3, 'asdsad', NULL, 324.00, '[\"x\"]', '#c14444', NULL, 'Old', 'Yes', 'Yes', 'Yes', NULL, 'P', 0, '2021-08-20 00:22:29', '2021-08-20 00:22:29', NULL),
(14, 1, 'sdfsdf', 'werw', '45', NULL, '443', NULL, NULL, 4, 'sdfsd', NULL, 443.00, '[\"\"]', '#000000', NULL, 'Refurbished', 'Yes', 'Yes', 'Yes', NULL, 'P', 0, '2021-08-20 00:27:35', '2021-08-20 00:27:35', NULL),
(15, 1, 'sdfsdf', 'werw', '45', NULL, '443', NULL, NULL, 4, 'sdfsd', NULL, 443.00, '[\"\"]', '#000000', NULL, 'Refurbished', 'Yes', 'Yes', 'Yes', NULL, 'P', 0, '2021-08-20 00:28:11', '2021-08-20 00:28:11', NULL),
(16, 1, 'sdf', NULL, '34', '5', '32.3', NULL, NULL, 3, 'sdfsd', NULL, 34.00, '[\"\"]', '#000000', NULL, 'Refurbished', 'Yes', 'Yes', 'Available', NULL, 'A', 0, '2021-08-20 01:36:03', '2021-08-20 01:36:03', NULL),
(17, 1, 'sdf', 're', '34', '3', '226.98', NULL, NULL, 2, 'ewrw', NULL, 234.00, '[\"\"]', '#000000', NULL, 'New', 'Yes', 'No', 'Available', NULL, 'A', 0, '2021-08-20 01:54:56', '2021-08-20 01:54:56', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_assign_templates`
--

CREATE TABLE `product_assign_templates` (
  `id` int(11) NOT NULL,
  `template_id` int(10) UNSIGNED DEFAULT NULL,
  `product_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_assign_templates`
--

INSERT INTO `product_assign_templates` (`id`, `template_id`, `product_id`, `created_at`, `updated_at`) VALUES
(48, 1, NULL, '2021-08-23 03:53:19', '2021-08-23 03:53:19'),
(54, 1, 9, '2021-08-23 03:54:08', '2021-08-23 03:54:08'),
(55, 1, 10, '2021-08-23 03:54:08', '2021-08-23 03:54:08'),
(56, 1, 11, '2021-08-23 03:54:08', '2021-08-23 03:54:08'),
(57, 1, 4, '2021-08-24 22:57:10', '2021-08-24 22:57:10'),
(58, 1, 8, '2021-08-24 22:57:10', '2021-08-24 22:57:10');

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
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `role_user`
--

CREATE TABLE `role_user` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_user`
--

INSERT INTO `role_user` (`role_id`, `user_id`, `user_type`) VALUES
(1, 1, 'App\\Models\\User'),
(4, 43, 'App\\Models\\User'),
(3, 44, 'App\\Models\\User'),
(4, 45, 'App\\Models\\User'),
(4, 46, 'App\\Models\\User'),
(3, 47, 'App\\Models\\User'),
(3, 48, 'App\\Models\\User'),
(3, 58, 'App\\Models\\User'),
(3, 59, 'App\\Models\\User'),
(3, 60, 'App\\Models\\User'),
(3, 71, 'App\\Models\\User'),
(3, 72, 'App\\Models\\User'),
(3, 73, 'App\\Models\\User'),
(3, 75, 'App\\Models\\User'),
(3, 76, 'App\\Models\\User'),
(3, 79, 'App\\Models\\User'),
(3, 80, 'App\\Models\\User'),
(3, 82, 'App\\Models\\User'),
(3, 83, 'App\\Models\\User'),
(3, 84, 'App\\Models\\User'),
(4, 85, 'App\\Models\\User'),
(3, 86, 'App\\Models\\User'),
(3, 87, 'App\\Models\\User');

-- --------------------------------------------------------

--
-- Table structure for table `shiping_address`
--

CREATE TABLE `shiping_address` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `f_name` varchar(100) DEFAULT NULL,
  `l_name` varchar(100) DEFAULT NULL,
  `zip_code` varchar(15) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone_no` varchar(15) DEFAULT NULL,
  `alternative_phone_no` varchar(15) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shiping_address`
--

INSERT INTO `shiping_address` (`id`, `user_id`, `country`, `state`, `address`, `city`, `f_name`, `l_name`, `zip_code`, `email`, `phone_no`, `alternative_phone_no`, `notes`, `created_at`, `updated_at`) VALUES
(117, 44, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tamplates`
--

CREATE TABLE `tamplates` (
  `id` int(11) NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `slug` varchar(50) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `sequence_no` varchar(3) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tamplates`
--

INSERT INTO `tamplates` (`id`, `user_id`, `slug`, `name`, `sequence_no`, `created_at`, `updated_at`) VALUES
(1, 1, 'deals', 'Deals', '1', '2021-08-22 09:20:19', '2021-08-24 22:42:55'),
(2, 1, 'hot_listing', 'Hot Listing', '2', '2021-08-22 09:22:23', '2021-08-24 22:41:42'),
(3, 1, 'dollar_reserve_only', '$1 dollar_reserve_only', '3', '2021-08-22 09:43:57', '2021-08-24 22:53:58');

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
  `api_token` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `business_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `billing_address` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `billing_address_finder` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nz_business_no` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nz_gst_no` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `online_status` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `user_role`, `email`, `phone_no`, `f_name`, `l_name`, `dob`, `gender`, `country`, `city`, `state`, `zip`, `district_town`, `domain_url`, `template_id`, `template_name`, `address`, `address_finder`, `is_terms`, `status`, `api_token`, `email_verified_at`, `password`, `remember_token`, `business_name`, `billing_address`, `billing_address_finder`, `nz_business_no`, `nz_gst_no`, `online_status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Admin', 1, 'admin@gmail.com', '1234567899', NULL, NULL, NULL, NULL, 'New Zealand', NULL, NULL, NULL, 'Auckland', '127.0.0.1:8000', 2, 'template_one', NULL, NULL, 1, 'A', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZWNkYjVhNjIxZGMwOGZlMmYwMTM2ZDA1N2MxODRiNDlmNzQxODg5ZDdkMTZmODRjZWRiOTY5ZjU5ZWI0NjEwZTdmYWFmYmJmM2IwODU4MDAiLCJpYXQiOjE2MjgyNjEzODEuNDgyNjMsIm5iZiI6MTYyODI2MTM4MS40ODI2NDUsImV4cCI6MTYyODI2MTQzOS4yMTU5OTksInN1YiI6IjEiLCJzY29wZXMiOltdfQ.RofR0Ok4GMfDeb9Xa20fA0aWinL5cpiW_d3iKLajVQ8fwOGdwP1QsbrJhuOEI0TGrDQTRh67fglW6-ObCUJNB60Jd-MNxxyYyhgTGNkdbG5XpSv1w81tTN164xFgQiUMcaNRa1QnH9dTJ49UYfmFsN3b_U1vviVieOnwfgPgx5WEzpyDuxqsZcfMVKfJKm1452RT11Y4212aR_cwrAGGPtGvKcBaYQ2HhuSKEO7xiFMI_hj1Tbxxfpz99t9HsiYIe5whsW1y30BbIYXNnze13ML1Fj9ACT7C5Heg8BdVCTnd7TvOndF8fGpwmfTXrfGNT_Q19vlNfqxCiC4TvOxq_5IUpmO2JPe0guNDK_ecjWbOPS2x75EZnYwpO2yvzA42LRhNRORRHBri0WNIvNQVgw8XrPkFX4B3sz5y1KVeKeU8CERV7fQq-cKnah0lNaxnPRX5rdgJ5JwzBMqye-omhu8A9LtxiyYnLUwdH4EWkvseNMsKXV_vdDtaTGNTnvWszM3TbSWHhkQby-hu87OgUmeQkqFjskAJS8xfnoa7EWoj46yDqFJUDO3vqyUx68q2zrOlqkRho-acvVJuyC2KQChKLRh0cjTl8qTsooiDJtEaO5DF3f2uNLRZNRhv9XFPkyqu6RJRj8buIaBsAWpL9x7HUqfiOHn7jdvGr18gP0w', '2021-04-03 13:00:00', '$2y$10$bQdrSFRrtvczVe1skQIo1eK0gp7CEYX16W1JOL1l1XVhg1nmwV3Ey', '01cGIPoqEDGOXo75l6PlmadaBrYTR0zTfAVEMfFDTTeb4VYrVphjVIIeTmhY', NULL, NULL, NULL, NULL, NULL, 1, '2021-04-03 13:00:00', '2021-09-04 22:26:21', NULL),
(43, 'Seller Marchant', 4, 'seller@gmail.com', '1234567890', 'Seller', 'Marchant', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'test', 0, 'A', NULL, '0000-00-00 00:00:00', '$2y$10$GgMUA06C1E1tCcMxGpyvWORyjVxkLXAhnF.R/dfKMcemP2AgwYwvG', 'a2yM1yO41K7tI6QWOvJXh2wdijgYtIMF4WIh0vd8vhHWf1AvvXcNd8QQGdXy', 'Test', NULL, NULL, 'test', '123456', 0, '2021-08-06 08:32:32', '2021-08-06 08:32:56', NULL),
(44, ' buyer', 3, 'customer@gmail.com', '5555555555', 'customer', 'buyer', '2021-08-11', 'Male', 'New Zealand', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'qsd', NULL, 1, 'A', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDM3ZGMyZjMzZjA3N2ZlZjY5MDBmYjFhYzQ5NjgwNzhmNDM4ZjJjNjA0YmZiZGIwY2VlMDEyNmJmMWVkZWYwNDFiOTc0NDQ5NmMzYmUzOTAiLCJpYXQiOjE2Mjk4ODQ2NzAuMDA5MjgxLCJuYmYiOjE2Mjk4ODQ2NzAuMDA5NDUsImV4cCI6MTYyOTk3MTA2NS41ODExMDgsInN1YiI6IjQ0Iiwic2NvcGVzIjpbXX0.TeVTBy9DKr4kU-jIJKji3bLy7N5cScqZQ34gMx8LYd0qiUGtGaEikvLxK8Rkd6hJNXBGBHLmxxw6GWqqDqyx_7GmjDpt6I2WaNSAyJPTlm_dqaDQx6Jjuw7wvHYsAS2zwgIf7d4xdM2L-_a-z-uoFFhNf4F0RFjjPYp6551DyW7BNYd8ADiKobylM4S_yhhsb4Gczwno1-MU5QyQAR66stWyHqd4Cqou3Q1zfXcviEjwJP6vm0JhCg4GwihjpSOGnlb7WDUt1f9PVuRg4zbc4fF_x62ekqheVkkhH8y7148dvYbN4j3BO6iLutSIELvV0sOw2lhP_WAjGNilfTqYYAR3mLp9tyMZUM3kFtka6_u6SNjOS_T4Nf6Gmhwr1LZ-YhhgorUHT67GGEbpnD3sb-jmiJYu1LG2anJ2mbJcp9_nehfD4ALvVPJjIx8TnUuIjsOvPf1oh2-zwpvPi6Ycs55J8aNbcVh8zIaP0I_A12cX8Jll0Dm434me3JsqCg4e1y6iqC2WwTacNdysbsd-GnZIL6Gy5nMbPlF4ZKILPT8s67NOpqV1ppFrGEKJeLtSwGtxB9irlfJwj0AnmYkFch9a2OInz0gNKRLyq1Jn02lOjdttABeWE4Fx-lwAVzM0ay01hMXl2Izhdh4kLucT52I9R_H70n9oWgNzhmdo7EQ', '2021-08-05 21:18:56', '$2y$10$li5P3GgN2XbHaDDkKc6V5uLd4fJ.CBAANb/HR2B3FnGp3AaWuTw2G', 'nfjiXQnE7yiOCuCUY73C1jiQXrpVrZ5PszNpxAFV', NULL, 'Aukaland', NULL, NULL, NULL, 1, '2021-08-06 08:39:35', '2021-08-25 04:14:30', NULL),
(45, ' ', 4, 'admiwqn@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 'P', NULL, NULL, '$2y$10$1iKFlDH5T3rI7ERwMdJWU.FPRrvCZRPYZGZgLQ92CMnYcElSW6R4u', 'UfX4gjWzvF8XFpKttyqSznK0L4Nv7v0J3WyUruJg', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-06 11:14:52', '2021-08-06 11:14:52', NULL),
(46, ' ', 4, 'adminsw12@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 'A', NULL, '2021-08-05 23:45:36', '$2y$10$MNZJUDdGWkVzMR7o5u2GrupFG4kQ69r567CYbBdsY3RbRYDH5JZPC', 'XzpuVVNk9AwkPU2oA9fd19iAVPXVXQkxgc7CERMJRRTl4dwO0wGrPK0CpuBM', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-06 11:17:55', '2021-08-06 11:45:36', NULL),
(47, ' syam', 3, 'ram@gmail.com', '123213213', 'ram', 'syam', '2021-08-13', 'Male', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '123', NULL, 0, 'P', NULL, NULL, '$2y$10$ymqNvHUaPHZ86n0sHI.YuepWiJ9f.pjdcFyPzPMDd6nuwLl5EFpZS', 'oSy52EMKG3oeOqxobKzw46RoQxzsRYz5sgNAYekF', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-06 12:01:13', '2021-08-06 12:01:13', NULL),
(48, ' fsdf', 3, 'test@gmail.com', '32423442', 'tesdfsdd', 'fsdf', '2021-08-19', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 'P', NULL, NULL, '$2y$10$D/vSKac6zLnE6Z2xCiFUaunyLrqPy3qGt5SuIfTunOE67C485eOTW', 'Y8qESktLJiPWcuck8syzFcY469qcrI0vIzWNweWq', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-06 12:28:19', '2021-08-06 12:28:19', NULL),
(58, ' k', 3, 'k@gmsil.com', '4846452315', 'k', 'k', '2021-08-13', 'Male', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 'P', NULL, NULL, '$2y$10$MOW22eltMzCKTOknGj83surSDM3EpLyL.OZI0qX5CQ68SMK/ubKzS', '6Rst3Syxw0W1iC8T4RRPXtfDFBF9zqm1ZzdJDTlB', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-06 21:54:44', '2021-08-06 21:54:44', NULL),
(59, ' k2', 3, 'kk@gmail.com', '4846152315', 'k2', 'k2', '2021-08-13', 'Male', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 'P', NULL, NULL, '$2y$10$tTDbvx5jYbouTwaRx.ldjeW/FKvnHkn4Ql.RdYYUOv3LaMXF9d3vO', 'ToFpkbU1O8vjxJsR9zFDIsKKZvUcRwAfoI8ZHHWr', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-06 21:58:50', '2021-08-06 21:58:50', NULL),
(60, ' sdff', 3, 'sdf@gmail.com', '3434343434', 'dfsdssg', 'sdff', '2021-08-20', 'Male', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'sdfs', NULL, 0, 'P', NULL, NULL, '$2y$10$.1qEPGlHyDJFBE1HC3T8aeuqjE2dji1BEA/DtDLQZSTx1A.7FCaqK', 'CTFIWL536u4d716Mbk6ULjNTorDBNbJwDimr9aqm', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-06 22:01:15', '2021-08-06 22:01:15', NULL),
(71, 'ravi', 3, 'sdfsdzasdass@gmail.com', '22222222', 'ravi', 'k', '2021-08-20', 'Male', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'sdfs', NULL, 0, 'P', NULL, NULL, '$2y$10$Hj8DK4nbqOb5G1UCWK7/o.Yr7g22pdeDsYkhJrQPzWnEjh0YYgLdK', 'c7jrTrwckRWmmzTaWeVdChJtlxTjRnyfjzSGl1ka', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-06 22:20:42', '2021-08-06 22:20:42', NULL),
(72, 'ravi', 3, 'SasAS@gmail.com', '22202622', 'ravi', 'k', '2021-08-20', 'Male', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'sdfs', NULL, 0, 'P', NULL, NULL, '$2y$10$x6m6NJUJZiLusUD3oXmYe.x5t867QvwRExiF/pz6/eBUZnZ3DaC.S', 'A5r9iAyGFfYSOG9aoqVSZjfW78R3bzBgxqTwZWwZ', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-06 22:23:28', '2021-08-06 22:23:28', NULL),
(73, 'ravi', 3, 'SasasAS@gmail.com', '22207622', 'ravi', 'k', '2021-08-20', 'Male', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'sdfs', NULL, 0, 'P', NULL, NULL, '$2y$10$240YuKumzhbqM7KKcDdHlesyS1MO52MEnn4LJXGOQEjhJ7nRSbszG', 'ogEdxEY9Lo8w0ECazw1HiOsrY3saF85XUlrqpmXr', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-06 22:24:44', '2021-08-06 22:24:44', NULL),
(75, 'asd', 3, 'asdasd@gmail.com', '2323232323', 'asd', 'hj', '2021-08-18', 'Male', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'dfsf', NULL, 0, 'P', NULL, NULL, '$2y$10$ZrQY7AX0rrPXFHCDFYUtCOzRVVvqR4kE8JwNjLkTXo23o0ExWlsgG', 'JT9VeqNmodhBNTPRRyTSOwpvLzEnUfPel15UxYCH', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-06 22:27:56', '2021-08-06 22:27:56', NULL),
(76, 'sdfsdf', 3, 'asdasds@gmail.com', '4545454545', 'sdfsdf', 'sdfdsf', '2021-08-18', 'Male', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'dsfsdf', NULL, 0, 'P', NULL, NULL, '$2y$10$KoZ25gAGfK6iCbf4gg0CHe13WCBToPtZZcQeWyk2rsW/Op.smO/5m', 'hPRGWeILHjQCBCW2fyeA7MQRwO0XFTyfKabG5Tk3', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-06 22:31:02', '2021-08-06 22:31:02', NULL),
(79, 'sdfdsfsd', 3, 'SasasdAS@gmail.com', '123456789', 'sdfdsfsd', 'sdf', '2021-08-20', 'Male', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'sdf', NULL, 0, 'P', NULL, NULL, '$2y$10$aXUxv2.3a/Q8JICHGKtJEueEdRmuTmLAUP/M2xmQNK4LcYU90xUFa', 'JqtiqnHdGBs8TajfB9nGI80EoX5t0B8KzBamjyKc', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-06 22:38:18', '2021-08-06 22:38:18', NULL),
(80, 'sadsad', 3, 'adsaffmin@demo.com', '213213213', 'sadsad', 'zf', '2021-08-18', 'Male', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'sd', NULL, 0, 'P', NULL, NULL, '$2y$10$SiY5v.ZxucLMjUo.Z3N5sei.qlYAr0RHuzJ4n5rU3t1x2mSKLyj9K', 'L7eJoTgzOUPQqvvOQJVgoagP6Qy7gbwEPD0f3g4S', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-06 23:07:36', '2021-08-06 23:07:36', NULL),
(82, 'hvhgv', 3, 'admihbhn@gmail.com', '3434343435', 'hvhgv', 'yfuu', '2021-08-20', 'Male', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'jhgh', NULL, 0, 'P', NULL, NULL, '$2y$10$vB47svXoc6OajAx8eUBu2eamu6.k.nZ5Id5g6/FQObD6OZZSePHau', 'Zu1YUsleP1mvQw5sf7tukcyyU6QXfRRtDKehyrfi', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-06 23:11:43', '2021-08-06 23:11:43', NULL),
(83, 'rwr', 3, 'merchant2@demo.com', '3454354545', 'rwr', 'sdf', '2021-08-18', NULL, NULL, NULL, NULL, '54545', NULL, NULL, NULL, NULL, 'kfghfh', NULL, 0, 'P', NULL, NULL, '$2y$10$gMXY.p4QtLWOFpteCavm8.B8SdUU7MwwBzZq8YQ3UYufXk/1zHSHm', '0zu14mLIT6i2ovdLAZUzE2ZIOYCCLNEbWggtFxvx', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-15 01:00:15', '2021-08-15 01:00:15', NULL),
(84, 'm', 4, 'customer4@gmail.com', '3516441815', 'm', 'K', '2021-08-11', NULL, NULL, NULL, NULL, '123432', NULL, NULL, NULL, NULL, 'SDDSFVXC', NULL, 0, 'A', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYjlmZGE4NzJjY2ZhMGViOGE1MmQ4ZDJiMWIxNDdjOGMzMDBmM2IxMjVhNzc4ZWVjNDBhNjZhN2ZiZThiYjFkZDBiMzVlZDQyM2UwNmZhMzciLCJpYXQiOjE2MjkwMTc1ODkuMDMwNzUzLCJuYmYiOjE2MjkwMTc1ODkuMDMwNzY4LCJleHAiOjE2MjkxMDM5ODguMzU4NjE3LCJzdWIiOiI4NCIsInNjb3BlcyI6W119.U_tmuhNvpa2CY8KnhOQKuryiEJVmcfmBSQYPxt0lh6qnSnAJqedJ7FE1Q0aAmV3G2Feea2UY2M5Hbxn88Iiq1OqzLEVmzaRppUj3EnMxtUDsCqaH6KuTK9BjJFI6DsfPIrl1wVHvXJ0k32xxbFsIeygCYWH7554ks0K0s5RCWvzstrzLxnLX_k7f1hKckWEsX3j_m4RJeiRjsfKFW6Qd43EKk1f_2kbVHZ93PVvNyB4gHMNVOBZhrndHxjVumxz4YCjyQ9dVeVGvG9CK60-FiUUX68-nglNx_rorDq6JefTUj_TFIR7AP5UU408Lq5-M2qRjDrXlzs7fxSK-mziJyVlo9wjtm1eSclcgTJ6Z7jjmQbyXjYO0MdZ5YgSGo4O9fPfTRX3t1_nD5craezl19_EEVREvYFTxhM1-AQsjXOyGnxeHToKCUWScpJleNORjcAnz6MpziTAvEx1Ko2rRm3faF098Euav4gEDtMYxy-F80L0BuHUjgLywXF1eNO09QU2D3RgtjiKi3lspZrXSRvX6TcHHlpbdkL1BohBe2cfnCUoUt7kHiPSBO3KhScfcmfAGP_FRAHlyfIsFQr3q8ddnWRBrUxGmjrkAbgwtWqm_MeLFc93nrBzdHzL5jVNi1tmT0p27_1ubK9Y5jmwstQX-Za5wGo6nma6J4YNaTQ0', '2021-08-15 02:16:30', '$2y$10$li5P3GgN2XbHaDDkKc6V5uLd4fJ.CBAANb/HR2B3FnGp3AaWuTw2G', 'SgW7Eiw6u0yB8HJhrBTXQuPGtnRew8knf3LKhlr93oG1SNFSgLAbZgJ7eubR', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-15 01:37:47', '2021-08-15 03:23:09', NULL),
(86, 'customer', 3, 'customer2@gmail.com', '8888555544', 'customer', 'care', '2021-08-17', NULL, NULL, NULL, NULL, '12344', NULL, NULL, NULL, NULL, 'Auckland', NULL, 0, 'A', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDcyMWM1YmE1YjUzZjU5NDg0MTRjNjFhYmQ2ODE0YzIxYjk4YTIxMjUyOTU3MzhlZTFlMTBmNTAzOGI1MmM0OWQ1MmQyNWRlODY2YTc2OWQiLCJpYXQiOjE2MjkwMzk5NTYuNzc3NjU0LCJuYmYiOjE2MjkwMzk5NTYuNzc3NjgxLCJleHAiOjE2MjkxMjYzNTUuNTQ1MTY3LCJzdWIiOiI4NiIsInNjb3BlcyI6W119.mjaWxH0-TnSRSdEjOmvx-jV-4L1qB3ysODsB2iAtUJQnpu-A9vTYqfPEu48mjwkfKY4Ir4IJ0mvC6bV_3L65jGxcyDjVlkaYzBHOYYsmr8EfG26bYsePIMDcCxeOjAPR34ItbgVKqbrVNpgiGi4mq_iON1gJ_ZW-u0RB8OXfrAzZSZ9YAbf8CsSpfheDzn3fhILLUmi2gqqdrbna-DRTKzd37tqHlbP6aUL983APzSvON0e05NaH6WrknwrpvoSz31QBDCOZdX7J2S2ckEoH9hafqdEQSAHdX5XHLYnwMInnAA_5__zEJf2vw6Mrn-hfme5tF8OwAuSVfWwj1E7pNT9bhIv1fAfb3zs_a4iJLs9JZzY8vEvbA2UaAnMemOOU8zXY5ahuMv1_-XqJIXxo7UZhPrSDCgovwZJ01TQ6moXit9hkszTe9Es7vMAUwbJH117WPyMhbODhUOeiRp4jKJnc4BuDbyNDLWkmV34OjfWzfbHnMGESc3qKcR2UoV2KlcGjRar5NT-3niS1FPWU4CDsZJ_mZzdKoiV0UKwa69gyI_nlyj6kQ1rhKkyQvyJHb-cZgzdn6PtWz3twt-Ldtq6kl2fN0uXY-5mpeSbSbLOo-JI6VotPiaFzpUbSWWIwE_6tS1SI8JVkkfJLAhZjccYtNpqpKNgnKg8P4CDQUHw', '2021-08-14 21:35:27', '$2y$10$sPOq/9h3ojrhaXyqKQ.HOubQayzclEByLITuf/DEPb/VYcuhAiPyG', 'JM9Kj0vEs4fNYbavJb3XmOaIPM3jNsvSlI1suxgK', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-15 09:34:23', '2021-08-15 09:35:56', NULL),
(87, 'sdfsf', 3, 'customewqeqwer@gmail.com', '4242343434', 'sdfsf', 'sdf', '2021-08-18', 'Male', 'NZ', 'Kaikohe', 'Auckland', '32424', NULL, NULL, NULL, NULL, 'sdfqweqwe', NULL, 0, 'P', NULL, NULL, '$2y$10$HLLlbHdmuATiG/JJ7OikaertGf4uYA97QBDI.VFP.rSB1HEeE2z0G', 'QnW1LwbXZFF6XorEMTiTrMY7hNg0Dg79h3Pj7zDT', NULL, NULL, NULL, NULL, NULL, 0, '2021-08-15 10:49:05', '2021-08-15 10:49:05', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `wish_lists`
--

CREATE TABLE `wish_lists` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wish_lists`
--

INSERT INTO `wish_lists` (`id`, `user_id`, `product_id`, `created_at`, `updated_at`) VALUES
(23, 44, 4, '2021-08-14 02:12:50', '2021-08-14 02:12:50'),
(24, 44, 9, '2021-08-14 06:23:57', '2021-08-14 06:23:57'),
(25, NULL, 10, '2021-08-14 22:53:45', '2021-08-14 22:53:45');

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `carts_user_id_foreign` (`user_id`);

--
-- Indexes for table `cart_item`
--
ALTER TABLE `cart_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_item_cart_id_foreign` (`cart_id`);

--
-- Indexes for table `catg_mast`
--
ALTER TABLE `catg_mast`
  ADD PRIMARY KEY (`catg_id`);

--
-- Indexes for table `chat_with_sellers`
--
ALTER TABLE `chat_with_sellers`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_address_id_foreign` (`address_id`),
  ADD KEY `orders_user_id_foreign` (`user_id`),
  ADD KEY `orders_marchent_id_foreign` (`marchent_id`),
  ADD KEY `address_id` (`address_id`);

--
-- Indexes for table `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_item_order_id_foreign` (`order_id`);

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
-- Indexes for table `place_bids`
--
ALTER TABLE `place_bids`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pro_id`);

--
-- Indexes for table `product_assign_templates`
--
ALTER TABLE `product_assign_templates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `role_user`
--
ALTER TABLE `role_user`
  ADD PRIMARY KEY (`user_id`,`role_id`,`user_type`),
  ADD KEY `role_user_role_id_foreign` (`role_id`);

--
-- Indexes for table `shiping_address`
--
ALTER TABLE `shiping_address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shiping_address_user_id_foreign` (`user_id`);

--
-- Indexes for table `tamplates`
--
ALTER TABLE `tamplates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `mobile` (`phone_no`);

--
-- Indexes for table `wish_lists`
--
ALTER TABLE `wish_lists`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `cart_item`
--
ALTER TABLE `cart_item`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `catg_mast`
--
ALTER TABLE `catg_mast`
  MODIFY `catg_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `chat_with_sellers`
--
ALTER TABLE `chat_with_sellers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `doc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;

--
-- AUTO_INCREMENT for table `order_item`
--
ALTER TABLE `order_item`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=171;

--
-- AUTO_INCREMENT for table `place_bids`
--
ALTER TABLE `place_bids`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `pro_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `product_assign_templates`
--
ALTER TABLE `product_assign_templates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `shiping_address`
--
ALTER TABLE `shiping_address`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;

--
-- AUTO_INCREMENT for table `tamplates`
--
ALTER TABLE `tamplates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `wish_lists`
--
ALTER TABLE `wish_lists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `cart_item`
--
ALTER TABLE `cart_item`
  ADD CONSTRAINT `cart_item_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_address_id_foreign` FOREIGN KEY (`address_id`) REFERENCES `shiping_address` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `orders_marchent_id_foreign` FOREIGN KEY (`marchent_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `order_item`
--
ALTER TABLE `order_item`
  ADD CONSTRAINT `order_item_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `permission_user`
--
ALTER TABLE `permission_user`
  ADD CONSTRAINT `permission_user_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_user`
--
ALTER TABLE `role_user`
  ADD CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `shiping_address`
--
ALTER TABLE `shiping_address`
  ADD CONSTRAINT `shiping_address_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
