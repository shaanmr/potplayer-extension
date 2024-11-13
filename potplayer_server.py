from http.server import BaseHTTPRequestHandler, HTTPServer
import subprocess
import urllib.parse

class PotPlayerHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        if parsed_url.path == '/play':
            video_url = urllib.parse.parse_qs(parsed_url.query).get('url', [None])[0]
            if video_url:
                subprocess.Popen(["C:/Program Files/DAUM/PotPlayer/PotPlayerMini64.exe", video_url])
        self.send_response(200)
        self.end_headers()

server = HTTPServer(('localhost', 5000), PotPlayerHandler)
print("Server started on http://localhost:5000")
server.serve_forever()
