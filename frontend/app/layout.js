export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-gray-100">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}