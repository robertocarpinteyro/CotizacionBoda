// ─────────────────────────────────────────────────────────────
// Web3Forms: obtén tu access key GRATIS en https://web3forms.com
// (te la envían a tu correo). Pégala aquí abajo o define la
// variable de entorno NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
// ─────────────────────────────────────────────────────────────
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  'e7e6241e-48cd-49d8-b1d5-c45629324256';

export async function submitToWeb3Forms(
  form: HTMLFormElement,
  opts: { subject: string; fromName?: string },
): Promise<boolean> {
  const formData = new FormData(form);
  formData.append('access_key', WEB3FORMS_ACCESS_KEY);
  formData.append('subject', opts.subject);
  formData.append('from_name', opts.fromName ?? 'Cotización Boda');

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    return Boolean(data.success);
  } catch {
    return false;
  }
}
