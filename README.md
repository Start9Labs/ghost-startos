<p align="center">
  <img src="icon.png" alt="Project Logo" width="21%">
</p>

# Ghost for StartOS

[Ghost](https://github.com/TryGhost/Ghost) is an user-friendly blogging platform designed to simplify the process of publishing content on the web. Known for its elegant and minimalist design, Ghost provides writers, bloggers, and content creators with a distraction-free environment for creating and sharing their thoughts. It offers a range of features, including easy content management, customizable themes, and robust support for multimedia content. This repository creates the `s9pk` package that is installed to run `Ghost` on [StartOS](https://github.com/Start9Labs/start-os/).

## Dependencies

Prior to building the `ghost` package, it's essential to configure your build environment for StartOS services. You can find instructions on how to set up the appropriate build environment in the [Developer Docs](https://docs.start9.com/latest/developer-docs/packaging).

- [docker](https://docs.docker.com/get-docker)
- [docker-buildx](https://docs.docker.com/buildx/working-with-buildx/)
- [deno](https://deno.land/)
- [make](https://www.gnu.org/software/make/)
- [start-sdk](https://github.com/Start9Labs/start-os/tree/sdk/backend)
- [yq](https://mikefarah.gitbook.io/yq)

## Cloning

Clone the Ghost package repository locally.

```
git clone https://github.com/Start9Labs/ghost-startos.git
cd ghost-startos
```

## Building

To build the **Ghost** service as a universal package, run the following command:

```
make
```

Alternatively the package can be built for individual architectures by specifying the architecture as follows:

```
make x86
```

or

```
make arm
```

## Installing (on StartOS)

Before installation, define `host: https://server-name.local` in your `~/.embassy/config.yaml` config file then run the following commands to determine successful install:

> :information_source: Change server-name.local to your Start9 server address

```
start-cli auth login
#Enter your StartOS password
make install
```

**Tip:** You can also install the ghost.s9pk by sideloading it under the **StartOS > System > Sideload a Service** section.

## Verify Install

Go to your StartOS Services page, select **Ghost**, configure and start the service.

**Done!**
