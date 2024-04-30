<?php
require_once(__DIR__ . '/app/manageContent.php');
$mC = new \app\manageContent(preg_replace("/[^A-Za-z0-9.]/", "", $_GET['data']));