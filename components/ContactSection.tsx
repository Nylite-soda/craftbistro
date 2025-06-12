"use client";

import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Group,
  Stack,
  Box,
  GridCol,
  Button,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
} from "@tabler/icons-react";

export function ContactSection() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      subject: (value) =>
        value.length < 5 ? "Subject must have at least 5 characters" : null,
      message: (value) =>
        value.length < 10 ? "Message must have at least 10 characters" : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    notifications.show({
      title: "Message Sent",
      message: "Thank you for your message. We'll get back to you soon!",
      color: "gold",
    });
    form.reset();
  };

  return (
    <Box id="contact" className="section-bg" py={80}>
      <Container size="lg">
        <Stack gap="xl" align="center" mb={60}>
          <Text
            size="lg"
            className="!gold-accent"
            fw={400}
            style={{ fontFamily: "Georgia, serif", letterSpacing: "0.1em" }}
          >
            CONTACT US
          </Text>
          <Title
            order={2}
            size="3rem"
            c="cream.0"
            ta="center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Get In Touch
          </Title>
          <Text size="lg" c="gray.3" ta="center" maw={600}>
            Have questions about our menu, events, or want to plan a special
            occasion? We'd love to hear from you.
          </Text>
        </Stack>

        <Grid>
          <GridCol span={{ base: 12, md: 8 }}>
            <Card className="menu-card" p="xl" radius="md">
              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="md">
                  <Grid>
                    <GridCol span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Name"
                        placeholder="Your name"
                        required
                        {...form.getInputProps("name")}
                        styles={{
                          label: { color: "var(--restaurant-cream)" },
                          input: {
                            backgroundColor: "rgba(45, 45, 45, 0.5)",
                            borderColor: "rgba(241, 211, 179, 0.3)",
                            color: "var(--restaurant-cream)",
                          },
                        }}
                      />
                    </GridCol>
                    <GridCol span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Email"
                        placeholder="your.email@example.com"
                        required
                        {...form.getInputProps("email")}
                        styles={{
                          label: { color: "var(--restaurant-cream)" },
                          input: {
                            backgroundColor: "rgba(45, 45, 45, 0.5)",
                            borderColor: "rgba(241, 211, 179, 0.3)",
                            color: "var(--restaurant-cream)",
                          },
                        }}
                      />
                    </GridCol>
                  </Grid>

                  <TextInput
                    label="Subject"
                    placeholder="What's this about?"
                    required
                    {...form.getInputProps("subject")}
                    styles={{
                      label: { color: "var(--restaurant-cream)" },
                      input: {
                        backgroundColor: "rgba(45, 45, 45, 0.5)",
                        borderColor: "rgba(241, 211, 179, 0.3)",
                        color: "var(--restaurant-cream)",
                      },
                    }}
                  />

                  <Textarea
                    label="Message"
                    placeholder="Tell us more..."
                    rows={5}
                    required
                    {...form.getInputProps("message")}
                    styles={{
                      label: { color: "var(--restaurant-cream)" },
                      input: {
                        backgroundColor: "rgba(45, 45, 45, 0.5)",
                        borderColor: "rgba(241, 211, 179, 0.3)",
                        color: "var(--restaurant-cream)",
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    style={{
                      backgroundColor: "var(--restaurant-burgundy)",
                      color: "var(--restaurant-cream)",
                    }}
                    className="hover:!bg-restaurant-burgundy-dark"
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Card>
          </GridCol>

          <GridCol span={{ base: 12, md: 4 }}>
            <Stack gap="md">
              <Card className="menu-card" p="lg" radius="md">
                <Stack gap="md">
                  <Group gap="sm">
                    <IconPhone size={20} color="var(--restaurant-gold)" />
                    <Stack gap={0}>
                      <Text size="sm" fw={600} c="cream.0">
                        Phone
                      </Text>
                      <Text size="sm" c="gray.3">
                        (336) 846-4745
                      </Text>
                    </Stack>
                  </Group>

                  <Group gap="sm">
                    <IconMail size={20} color="var(--restaurant-gold)" />
                    <Stack gap={0}>
                      <Text size="sm" fw={600} c="cream.0">
                        Email
                      </Text>
                      <Text size="sm" c="gray.3">
                        info@craftbistro.com
                      </Text>
                    </Stack>
                  </Group>

                  <Group gap="sm" align="flex-start">
                    <IconMapPin size={20} color="var(--restaurant-gold)" />
                    <Stack gap={0}>
                      <Text size="sm" fw={600} c="cream.0">
                        Address
                      </Text>
                      <Text size="sm" c="gray.3">
                        123 Historic Theater Street
                        <br />
                        West Jefferson, NC 28694
                      </Text>
                    </Stack>
                  </Group>

                  <Group gap="sm" align="flex-start">
                    <IconClock size={20} color="var(--restaurant-gold)" />
                    <Stack gap={0}>
                      <Text size="sm" fw={600} c="cream.0">
                        Hours
                      </Text>
                      <Text size="sm" c="gray.3">
                        Tue-Thu: 5:00 PM - 10:00 PM
                        <br />
                        Fri-Sat: 5:00 PM - 11:00 PM
                        <br />
                        Sun: 5:00 PM - 9:00 PM
                        <br />
                        Mon: Closed
                      </Text>
                    </Stack>
                  </Group>
                </Stack>
              </Card>

              <Card className="menu-card" p="lg" radius="md">
                <Stack gap="sm">
                  <Title
                    order={4}
                    c="cream.0"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Follow Us
                  </Title>
                  <Text size="sm" c="gray.3">
                    Stay updated with our latest menu items, events, and special
                    offers.
                  </Text>
                  <Group gap="sm">
                    <Button
                      variant="outline"
                      color="gold.4"
                      size="sm"
                      style={{
                        borderColor: "var(--restaurant-gold)",
                        color: "var(--restaurant-gold)",
                      }}
                    >
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      color="gold.4"
                      size="sm"
                      style={{
                        borderColor: "var(--restaurant-gold)",
                        color: "var(--restaurant-gold)",
                      }}
                    >
                      Instagram
                    </Button>
                  </Group>
                </Stack>
              </Card>
            </Stack>
          </GridCol>
        </Grid>
      </Container>
    </Box>
  );
}
