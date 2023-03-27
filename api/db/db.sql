-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 27-Mar-2023 às 05:05
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `painelcovid`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `access_log`
--

CREATE TABLE `access_log` (
  `id` int(11) NOT NULL,
  `last_access` varchar(300) NOT NULL,
  `country` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `access_log`
--

INSERT INTO `access_log` (`id`, `last_access`, `country`) VALUES
(1, '26 de março de 2023 às 22:10', 'canada'),
(2, '26 de março de 2023 às 22:11', 'canada'),
(3, '26 de março de 2023 às 22:11', 'brazil'),
(4, '26 de março de 2023 às 22:11', 'australia'),
(5, '26 de março de 2023 às 22:13', 'brazil'),
(6, '26 de março de 2023 às 22:13', 'australia'),
(7, '26 de março de 2023 às 22:13', 'Azerbaijan'),
(8, '26 de março de 2023 às 22:13', 'China'),
(9, '26 de março de 2023 às 22:47', 'brazil'),
(10, '26 de março de 2023 às 22:47', 'brazil'),
(11, '26 de março de 2023 às 23:31', 'australia');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `access_log`
--
ALTER TABLE `access_log`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `access_log`
--
ALTER TABLE `access_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
