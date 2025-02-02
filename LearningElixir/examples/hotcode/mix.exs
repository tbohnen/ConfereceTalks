defmodule Hotcode.Mixfile do
  use Mix.Project

  def project do
    [app: :hotcode,
     version: "0.0.2",
     elixir: "~> 1.2",
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     deps: deps]
  end

  def application do
    [applications: [:logger]]
  end

  defp deps do
    [{:exrm, "~> 0.18.1"}]
  end

end
