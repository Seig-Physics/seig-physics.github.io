<?php
$realfilepath= "download.zip"; // $_GET['file']や$_SERVER['PATH_INFO']から取得した値を想定
if (!file_exists($realfilepath)) die("処理に失敗しました。");
$encfile= basename($realfilepath);
$ua= $_SERVER['HTTP_USER_AGENT'];

if (strpos($ua, "MSIE") >=0 && strpos($ua, "Win") >=0 && !(strpos($ua, "Opera") >= 0)){
    header('Cache-Control: public');
    header('Pragma: public');
    $encfile= urlencode(mb_convert_encoding($encfile, "SJIS", "SJIS,UTF-8,EUC-JP,JIS"));
} else {
    header("Cache-Control: no-cache, must-revalidate");
    header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
    if (!(strpos($ua, "Opera") >=0)) header("Content-Type: application/force-download");
    if (!(strpos($ua, "Win") >=0) && preg_match("/MSIE|Safari|Konqueror/", $ua))
        $encfile= '';
    else if (preg_match('/[\x1b\x80-\xff]/', $encfile))
        $encfile= mb_encode_mimeheader(mb_convert_encoding($encfile, "UTF-8", "SJIS,UTF-8,EUC-JP,JIS"), "UTF-8", "B");
}

header("Content-Disposition: attachment; filename=\"{$encfile}\"");
header("Content-Type: application/octet-stream");
header("Content-Length: " . filesize($realfilepath));

readfile($realfilepath);
exit;

?>
