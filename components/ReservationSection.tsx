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
  Select,
  Textarea,
} from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  IconCalendar,
  IconClock,
  IconUsers,
  IconPhone,
} from "@tabler/icons-react";

export function ReservationSection() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      date: null,
      time: "",
      guests: "",
      specialRequests: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) => (value.length < 10 ? "Phone number is required" : null),
      date: (value) => (value ? null : "Date is required"),
      time: (value) => (value ? null : "Time is required"),
      guests: (value) => (value ? null : "Number of guests is required"),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    notifications.show({
      title: "Reservation Request Submitted",
      message: "We'll contact you within 24 hours to confirm your reservation.",
      color: "gold",
    });
    form.reset();
  };

  const timeSlots = [
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
  ];

  const guestOptions = [
    "1 Guest",
    "2 Guests",
    "3 Guests",
    "4 Guests",
    "5 Guests",
    "6 Guests",
    "7 Guests",
    "8 Guests",
    "9+ Guests",
  ];

  return (
    <Box id="reservations" className="section-bg" py={80}>
      <Container size="lg">
        <Stack gap="xl" align="center" mb={60}>
          <Text
            size="lg"
            className="!text-restaurant-gold transition duration-300 ease-in-out"
            fw={400}
            style={{ fontFamily: "Georgia, serif", letterSpacing: "0.1em" }}
          >
            RESERVATIONS
          </Text>
          <Title
            order={2}
            size="3rem"
            c="cream.0"
            ta="center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Book Your Table
          </Title>
          <Text size="lg" c="gray.3" ta="center" maw={600}>
            Reserve your table for an unforgettable dining experience. We
            recommend booking in advance, especially for weekend evenings.
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
                        label="Full Name"
                        placeholder="Your full name"
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

                  <Grid>
                    <GridCol span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Phone Number"
                        placeholder="(555) 123-4567"
                        required
                        leftSection={<IconPhone size={16} />}
                        {...form.getInputProps("phone")}
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
                      <Select
                        label="Number of Guests"
                        placeholder="Select party size"
                        data={guestOptions}
                        required
                        leftSection={<IconUsers size={16} />}
                        {...form.getInputProps("guests")}
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

                  <Grid>
                    <GridCol span={{ base: 12, sm: 6 }}>
                      <DateInput
                        clearable
                        label="Preferred Date"
                        placeholder="Select date"
                        required
                        leftSection={<IconCalendar size={16} />}
                        minDate={new Date()}
                        {...form.getInputProps("date")}
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
                      <Select
                        label="Preferred Time"
                        placeholder="Select time"
                        data={timeSlots}
                        required
                        leftSection={<IconClock size={16} />}
                        {...form.getInputProps("time")}
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

                  <Textarea
                    label="Special Requests"
                    placeholder="Dietary restrictions, special occasions, seating preferences..."
                    rows={3}
                    {...form.getInputProps("specialRequests")}
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
                    Request Reservation
                  </Button>
                </Stack>
              </form>
            </Card>
          </GridCol>

          <GridCol span={{ base: 12, md: 4 }}>
            <Stack gap="md">
              <Card className="menu-card" p="lg" radius="md">
                <Stack gap="sm">
                  <Title
                    order={4}
                    c="cream.0"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Hours of Operation
                  </Title>
                  <Group justify="space-between">
                    <Text size="sm" c="gray.3">
                      Tuesday - Thursday
                    </Text>
                    <Text size="sm" c="cream.0">
                      5:00 PM - 10:00 PM
                    </Text>
                  </Group>
                  <Group justify="space-between">
                    <Text size="sm" c="gray.3">
                      Friday - Saturday
                    </Text>
                    <Text size="sm" c="cream.0">
                      5:00 PM - 11:00 PM
                    </Text>
                  </Group>
                  <Group justify="space-between">
                    <Text size="sm" c="gray.3">
                      Sunday
                    </Text>
                    <Text size="sm" c="cream.0">
                      5:00 PM - 9:00 PM
                    </Text>
                  </Group>
                  <Group justify="space-between">
                    <Text size="sm" c="gray.3">
                      Monday
                    </Text>
                    <Text size="sm" c="cream.0">
                      Closed
                    </Text>
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
                    Contact Information
                  </Title>
                  <Text size="sm" c="gray.3">
                    Phone: (336) 846-4745
                  </Text>
                  <Text size="sm" c="gray.3">
                    Email: reservations@craftbistro.com
                  </Text>
                  <Text size="sm" c="gray.3">
                    Address: 123 Historic Theater St, West Jefferson, NC 28694
                  </Text>
                </Stack>
              </Card>
            </Stack>
          </GridCol>
        </Grid>
      </Container>
    </Box>
  );
}
