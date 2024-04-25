<?php

require $_SERVER['DOCUMENT_ROOT'].'/vendor/autoload.php';

use Carbon\Carbon;

printf("Now: %s", Carbon::now());