<?PHP
$file=filter_input(INPUT_GET,"file");
if(!file_exists($file)){
  print "not exists!";
}elseif(preg_match("/\.(jpg|png|gif)$/",$file)){
  header("Content-type: application/octet-stream");
  header("Content-Disposition: attachment; filename=\"$file\"");
  readfile($file);
  exit;
}else{
  print "not image!";
}
