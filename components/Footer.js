const Footer = () => {
  return (
    <footer>
      <div className="text-center py-3 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-700 text-sm font-medium">
        {new Date().getFullYear()} Copyright &copy; All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
