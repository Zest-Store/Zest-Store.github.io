<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zest Store – Launching Soon</title>
    <style>
        /* Modern Reset and Typography */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
        
        :root {
            --primary-dark: #2c3e50; /* Charcoal Gray */
            --accent-zest: #ff6a00; /* Vibrant Orange */
            --light-bg: #f5f5f5; /* Off-White Background */
        }

        body {
            font-family: 'Montserrat', sans-serif;
            background-color: var(--light-bg);
            color: var(--primary-dark);
            text-align: center;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            max-width: 600px;
            padding: 40px;
            background: white;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            animation: fadeIn 1s ease-in-out;
        }

        /* Logo/Branding Style */
        .logo-text {
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: 2px;
            margin-bottom: 5px;
            line-height: 1;
        }

        .logo-text .zest {
            color: var(--primary-dark);
        }

        .logo-text .store {
            font-weight: 400;
            color: #7f8c8d; /* Lighter Gray for 'STORE' */
        }
        
        /* The Zest Accent Line (Simplified visual element) */
        .zest-line {
            width: 80px;
            height: 4px;
            background-color: var(--accent-zest);
            margin: 10px auto 30px auto;
            border-radius: 2px;
        }

        h2 {
            font-weight: 400;
            font-size: 1.5rem;
            color: #34495e;
            margin-bottom: 25px;
        }

        /* Social Media Button */
        .social-link {
            display: inline-block;
            background-color: var(--accent-zest);
            color: white;
            text-decoration: none;
            padding: 12px 25px;
            border-radius: 50px;
            font-weight: 700;
            margin-top: 20px;
            transition: background-color 0.3s ease;
            box-shadow: 0 4px 15px rgba(255, 106, 0, 0.4);
        }

        .social-link:hover {
            background-color: #ff8c3a; /* Slightly lighter orange on hover */
        }
        
        /* Animation */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo-text">
            <span class="zest">ZEST</span>
            <span class="store">STORE</span>
        </div>
        
        <div class="zest-line"></div>

        <h2>Unleashing the energy you need.</h2>
        
        <p>We are currently perfecting our collections to bring you the best in quality and design. We will be launching soon!</p>
        
        <p>Be the first to know when we go live. Follow us now:</p>
        
        <a href="https://instagram.com/ZestStore" class="social-link" target="_blank">
            Follow @ZestStore
        </a>
    </div>
</body>
</html>
