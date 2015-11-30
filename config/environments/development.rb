Website::Application.configure do
  # Rewrite asset host to webpack dev server, if .webpack.js file is requested
  # and the dev server is up
  config.action_controller.asset_host = proc do |source|
    begin
      'http://localhost:8080' if source =~ /\.webpack\.(js|css)$/i &&
                                 TCPSocket.new('localhost', 8080).close.nil?
    rescue SystemCallError
      nil
    end
  end
end
