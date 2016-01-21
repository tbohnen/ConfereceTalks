defmodule Me.Worker do
  use GenServer

  def start_link(name) do
    res = GenServer.start_link(__MODULE__, :ok, name: name)
    IO.puts "started worker"
    res
  end

  def handle_call({:ok, state}, _from, _) do
    IO.puts "received call with state #{state}"
    :correct = state
    {:reply, [], []}
  end

  def correct(name) do
    GenServer.call(name, {:ok, :correct})
  end

  def incorrect(name) do
    GenServer.call(name, {:ok, :incorrect})
  end

end

defmodule Me.Supervisor do
  use Supervisor

  def start_link() do
    res = Supervisor.start_link(__MODULE__, :ok)
    IO.puts "Started Supervisor"
    res
  end

  def init(:ok) do
    children = [worker(Me.Worker, [:supervised])]
    supervise(children, strategy: :one_for_one)
  end
end


defmodule Examples do

  def unsupervised() do
    IO.gets "start Genserver without supervisor"
    Me.Worker.start_link(:unsupervised)
    IO.gets "call with no failure"
    Me.Worker.correct(:unsupervised)
    IO.gets "call with failure"
    Me.Worker.incorrect(:unsupervised)
  end

  def supervised() do
    IO.gets "start Genserver with supervisor"
    Me.Supervisor.start_link()
    IO.gets "call with no failure"
    Me.Worker.correct(:supervised)
    IO.gets "call with failure"
    Me.Worker.incorrect(:supervised)
  end

  def where() do
    IO.puts "Supervised PID #{inspect Process.whereis(:supervised)}"
    IO.puts "Unsupervised PID #{inspect Process.whereis(:unsupervised)}"
  end

end
