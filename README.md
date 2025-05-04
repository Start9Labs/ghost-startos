<p align="center">
  <img src="icon.png" alt="Project Logo" width="21%">
</p>

# Ghost for StartOS

[Ghost](https://github.com/TryGhost/Ghost) is an user-friendly blogging platform designed to simplify the process of publishing content on the web. Known for its elegant and minimalist design, Ghost provides writers, bloggers, and content creators with a distraction-free environment for creating and sharing their thoughts. It offers a range of features, including easy content management, customizable themes, and robust support for multimedia content. This repository creates the `s9pk` package that is installed to run `Ghost` on [StartOS](https://github.com/Start9Labs/start-os/).

## Dependencies

Prior to building the `ghost.s9pk` package, it's essential to configure your build environment for StartOS services. You can find instructions on how to set up the appropriate build environment in the [Packaging Guide](https://staging.docs.start9.com/packaging-guide/).

- [docker](https://docs.docker.com/get-docker)
- [docker-buildx](https://docs.docker.com/buildx/working-with-buildx/)
- [make](https://www.gnu.org/software/make/)
- [start-cli](https://github.com/Start9Labs/start-cli/)

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

## Installing (on StartOS)

Before installation, define `host: https://server-name.local` in your `~/.startos/config.yaml` config file then run the following commands to determine successful install:

> :information_source: Change server-name.local to your Start9 server address

```
make install
```

**Tip:** You can also install the ghost.s9pk by sideloading it under the **StartOS > System > Sideload a Service** section.

## Verify Install

Go to your StartOS Services page, select **Ghost**, configure and start the service.

**Done!**
