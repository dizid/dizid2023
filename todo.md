Here's how to configure Resend:

1. Get your API key:

Go to https://resend.com/api-keys
Create a new API key
Copy the key (starts with re_)
2. Verify your domain (for contact@dizid.com):

Go to https://resend.com/domains
Add dizid.com
Add the DNS records Resend gives you (usually TXT and MX records)
Wait for verification (can take a few minutes)
3. Add the API key to Netlify:

Go to your site in Netlify Dashboard
Site settings → Environment variables
Add: RESEND_API_KEY = re_your_key_here