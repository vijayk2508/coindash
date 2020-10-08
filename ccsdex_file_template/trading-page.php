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
    <link href="css/lib/owl.carousel.min.css" rel="stylesheet" />
    <link href="css/lib/owl.theme.default.min.css" rel="stylesheet" />
	<link href="css/lib/amchart/export.css" rel="stylesheet">
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
             
        <?php include("trading/trades.php"); ?>                    
                  
                <div class="row">
                    
                             test
                </div>
                <!-- End PAge Content -->
            </div>
            <!-- End Container fluid  -->
            <!-- footer -->
             <footer class="footer"> © 2020 CcS Dex All Right Reserved.</footer>
            <!-- End footer -->
        </div>
        <!-- End Page wrapper  -->
    </div>
    <!-- End Wrapper -->
    <!-- All Jquery -->
    <script src="js/lib/jquery/jquery.min.js"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="js/lib/bootstrap/js/popper.min.js"></script>
    <script src="js/lib/bootstrap/js/bootstrap.min.js"></script>
    <!-- slimscrollbar scrollbar JavaScript -->
    <script src="js/jquery.slimscroll.js"></script>
    <!--Menu sidebar -->
    <script src="js/sidebarmenu.js"></script>
    <!--stickey kit -->
    <script src="js/lib/sticky-kit-master/dist/sticky-kit.min.js"></script>
    <script src="js/lib/morris-chart/raphael-min.js"></script>
    <script src="js/lib/morris-chart/morris.js"></script>
	<!-- Amchart -->
    <script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
    <script src="js/lib/chart-amchart/serial.js"></script>
    <script src="js/lib/chart-amchart/export.min.js"></script>
    <script src="js/lib/chart-amchart/light.js"></script>
    <script src="js/lib/chart-amchart/ammap.js"></script>
    <script src="js/lib/chart-amchart/worldLow.js"></script>
    <script src="js/lib/chart-amchart/pie.js"></script>
    <script src="js/lib/chart-amchart/amstock.js"></script>
    <script src="js/lib/chart-amchart/amchart-init.js"></script>
    <script src="js/lib/weather/jquery.simpleWeather.min.js"></script>
    <script src="js/lib/weather/weather-init.js"></script>	
    <!--Custom JavaScript -->
    <script src="js/custom.min.js"></script>
    <script src="js/dashboard-2.js"></script>
</body>

</html>