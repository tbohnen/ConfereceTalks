require 'artoo'

connection :ardrone, :adaptor => :ardrone#, :port => '192.168.0.43:5556'
device :drone, :driver => :ardrone, :connection => :ardrone

work do
  drone.start
  drone.take_off

  after(5.seconds) { drone.hover.land }
  after(10.seconds) { drone.stop }
end
