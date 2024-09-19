<?php
header('Content-Type: application/json'); // Ensures the response is JSON
$files = array();

// Use the correct path to the markdown files
foreach (glob("blog/files/*.md") as $file) {
    $files[] = basename($file); // Get only the filename, not the full path
}

echo json_encode($files); // Output the filenames as JSON
?>