export default async function () {
  const module = await import(
    /* @vite-ignore */ `../assets/icon/aws.png`
  );
  return module.default.replace(/^\/@fs/, "");
}
