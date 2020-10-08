<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">
    <title>CcS Dex Pool - Cryptocurrency to Cryptocurrency Decentral Exchange</title>
    <!-- Custom CSS -->
    
    <link href="css/style.css" rel="stylesheet">
</head>

<body class="header-fix fix-sidebar">
    
    <!-- Main wrapper  -->
    <div id="main-wrapper">
        <!-- header header  -->
 <?php include("header.php"); ?>
        <!-- End header header -->
        <!-- Left Sidebar  -->
		<?php include("leftmenu.php"); ?>
        <!-- End Left Sidebar  -->

        <!-- Page wrapper  -->
        <div class="page-wrapper">
            <!-- Bread crumb -->
            <div class="row page-titles">
                <div class="col-md-5 align-self-center">
                    <h3 class="text-primary">Dashboard</h3> </div>
                <div class="col-md-7 align-self-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                        <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
                </div>
            </div>
            <!-- End Bread crumb -->
            <!-- Container fluid  -->
            <div class="container-fluid">
                <!-- Start Page Content -->
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body"><?php include("trading/full-balances.php"); ?></div>
                        </div>
                    </div>
                </div>
                <!-- End Page Content -->
            </div>
            <!-- End Container fluid  -->
            <!-- footer -->
            <footer class="footer"> © 2020 CcS All Right Reserved.</footer>
            <!-- End footer -->
        </div>
        <!-- End Page wrapper  -->
    </div>
    <!-- End Wrapper -->
		<?php include("js/page-js.php"); ?>

</body>

</html>