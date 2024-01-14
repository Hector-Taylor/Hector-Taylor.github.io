<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles.css">
    <title>Project Name - Hector Taylor</title>
</head>
<body>

<!-- Navigation bar -->
<header>
    <div id="nav-placeholder"></div>

    <script>
    fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').outerHTML = data;
    });
    </script>
</header>

<!-- Main Project Content -->
<main>
    <h1>Project Name</h1>

    <!-- Project Overview -->
    <section>
        <h2>Overview</h2>
        <p>Project description and general overview goes here. This section can detail what the project is about, its purpose, and what problem it aimed to solve.</p>
    </section>

    <!-- Project Date & Collaborators -->
    <section>
        <h2>Details</h2>
        <dl>
            <dt>Date:</dt>
            <dd>Month Year (e.g., January 2023)</dd>

            <dt>Collaborators:</dt>
            <dd>Collaborator Name 1, Collaborator Name 2, etc.</dd>
        </dl>
    </section>

    <!-- Project Media: Videos & GIFs -->
    <section>
        <h2>Media</h2>
        <figure>
            <figcaption>Project Video</figcaption>
            <video controls width="100%">
                <source src="path/to/your/video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </figure>

        <figure>
            <figcaption>Project GIF</figcaption>
            <img src="path/to/your/gif.gif" alt="Description of the GIF">
        </figure>
    </section>

    <!-- Project Files & Resources -->
    <section>
        <h2>Files & Resources</h2>
        <ul>
            <li><a href="path/to/file1.pdf" target="_blank">File Name 1 (e.g., Project Report)</a></li>
            <li><a href="path/to/file2.zip" target="_blank">File Name 2 (e.g., Source Code)</a></li>
            <!-- Add more files as needed -->
        </ul>
    </section>
</main>

<!-- Footer -->
<footer>
    <p>&copy; 2023 Hector Taylor</p>
</footer>

</body>
</html>
  