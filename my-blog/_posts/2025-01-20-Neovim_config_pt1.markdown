# Configuring Neovim(from scratch)
So today we will be configuring neovim to eventually be used for python dev. 
The lazy package manager is a great tool, so that is what I will be using. 
The goal is so that at the end of the series, you can use neovim in place
of your favorite ide, and take advantage of the [significant] performance 
gains that it offers over a regular ide. This is due to optimal resource 
utilization. Neovim was designed from the ground up to be a quick editor.
[[blog]]
Hello,
Today I will be showing you how to configure neovim to get an experience just like an ide. 
So let's start out with the why:
Why neovim? 
Neovim is a modification on vim, one of the oldest text editors around, which is a modification of vi, an even older text editor. Neovim is relatively new, it introduces Lua scripting and many features that make it possible to configure it to your preferences. 
You can easily get an experience similar to an ide like vs code, pycharm, sublime text, etc. but you have to put in some work to get there, it won't just happen on it's own. You could just copy a config from one of the preconfigured ones such as Lazyvim(recommended), NVChad, Astrovim(also nice), Lunarvim, and there are probably a few more that I missed. But today We will just be starting out from scratch, so that we understand everything that we are doing and don't leave anything out. 
Also at any point if you wanted to start over, it is as simple as rm -rf /path/to/config/files but I've done that plenty of times and I want to make a config that I will be able to just use for a long time. 
Something that you should definitely do with either vim or emacs is back up your configs to a github repo, if you already know how to use git, if not, there are several online sources that can show you how to set up git for the first time. Before any of this you will need:
access to a computer
access to terminal
admin privileges(sudo)
knowledge of the command line(basic)
knowledge of git(basic)
some free storage on your computer
## First step: installation
Installing Neovim for the first time(or second, third, etc.) is easy. just install using your favorite package manager or you can use either macports or homebrew if you're on mac. 
arm64 mac: 
curl -LO https://github.com/neovim/neovim/releases/download/nightly/nvim-macos-arm64.tar.gz
tar xzf nvim-macos-arm64.tar.gz
./nvim-macos-arm64/bin/nvim
homebrew:
- `brew install neovim`
MacPorts:
- `sudo port selfupdate`
- `sudo port install neovim`
On fedora: 
- `sudo dnf install neovim`
on ubuntu: 
- `sudo apt install neovim`
on Arch:
- `sudo pacman -S neovim`
on Nixos:
- `nix-env -iA nixpkgs.neovim`
Flathub:
- flatpak install flathub io.neovim.nvim
- flatpak run io.neovim.nvim!
Windows
- using winget: `winget install Neovim.Neovim`
- using chocolatey:
	- - **Release (v0.7):** `choco install neovim` (use -y for automatically skipping confirmation messages)
	- **Development (pre-release):** `choco install neovim --pre`
- Scoop:
	- `Scoop install neovim`
Alternatively you can build from source to get the latest version following the instructions on the github page for neovim.
Now that we have installed neovim, let's go on over to our ~/.config/nvim dir. If it doesn't exist yet, which you can check by typing ls ~/.config/nvim, you can simply `mkdir -p ~/.config/nvim` and then cd intso that directory then touch init.lua. 
then to open it using neovim, simply type `nvim init.lua`
now once you are in neovim, 
enter the following commands to set the number of spaces that a tab would take up using vim commands in lua.

![Screenshot 2025-01-18 at 2.37.35 PM.png| screenshot neovim starter]
![alt text](<Screenshot 2025-01-18 at 2.37.35 PM.png>)
