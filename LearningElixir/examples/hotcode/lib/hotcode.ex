defmodule Hotcode do

  @version "V2"

  def init do
    Agent.start_link(fn -> %{version: version} end, name: __MODULE__)
  end

  def get_version_in_state() do
    IO.inspect Agent.get(__MODULE__, fn -> %{version: version} end)
  end

  def version do
    IO.puts @version
    @version
  end

end
