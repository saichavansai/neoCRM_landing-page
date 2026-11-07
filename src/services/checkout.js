export async function startCheckout(order) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return { status: "paid" };
}
