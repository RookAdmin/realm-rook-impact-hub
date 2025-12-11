// Invoice Templates - 10 different professional designs

export interface InvoiceTemplate {
  id: number;
  name: string;
  description: string;
  generateHTML: (data: any, totals: any, format: (amount: number) => string, logoUrl?: string) => string;
}

export const invoiceTemplates: InvoiceTemplate[] = [
  {
    id: 1,
    name: "Classic",
    description: "Traditional professional invoice",
    generateHTML: (data, totals, format, logoUrl) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Invoice ${data.invoiceNumber}</title>
  <style>
    body { font-family: 'Times New Roman', serif; margin: 40px; color: #333; }
    .header { border-bottom: 3px solid #000; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center; }
    .logo-container { display: flex; align-items: center; }
    .logo { max-height: 60px; max-width: 200px; object-fit: contain; }
    .invoice-title { font-size: 36px; font-weight: bold; margin-bottom: 10px; }
    .invoice-info { text-align: right; }
    .section { margin: 20px 0; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th { background-color: #000; color: #fff; padding: 12px; text-align: left; }
    td { padding: 10px; border-bottom: 1px solid #ddd; }
    .total-row { font-weight: bold; background-color: #f5f5f5; }
    .text-right { text-align: right; }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo-container">
      ${logoUrl ? `<img src="${logoUrl}" alt="Logo" class="logo" />` : '<div class="invoice-title">INVOICE</div>'}
    </div>
    <div class="invoice-info">
      <p><strong>Invoice #:</strong> ${data.invoiceNumber}</p>
      <p><strong>Date:</strong> ${data.date}</p>
      ${data.dueDate ? `<p><strong>Due Date:</strong> ${data.dueDate}</p>` : ""}
    </div>
  </div>
  <div class="section">
    <div style="display: flex; justify-content: space-between;">
      <div>
        <h3>From:</h3>
        <p>${data.from.name}<br>${data.from.address}<br>${data.from.city}, ${data.from.zip}<br>${data.from.country}<br>${data.from.email}<br>${data.from.phone}</p>
      </div>
      <div>
        <h3>To:</h3>
        <p>${data.to.name}<br>${data.to.address}<br>${data.to.city}, ${data.to.zip}<br>${data.to.country}<br>${data.to.email}</p>
      </div>
    </div>
  </div>
  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th style="text-align: center;">Qty</th>
        <th style="text-align: right;">Price</th>
        <th style="text-align: right;">Amount</th>
      </tr>
    </thead>
    <tbody>
      ${data.items.map((item: any) => `
        <tr>
          <td style="color: #ffffff !important;">${item.description}</td>
          <td style="text-align: center; color: #ffffff !important;">${item.quantity}</td>
          <td style="text-align: right; color: #ffffff !important;">${format(item.unitPrice)}</td>
          <td style="text-align: right; color: #ffffff !important;">${format(item.quantity * item.unitPrice)}</td>
        </tr>
      `).join("")}
    </tbody>
    <tfoot>
      <tr><td colspan="3" class="text-right">Subtotal:</td><td class="text-right">${format(totals.subtotal)}</td></tr>
      ${totals.discountAmount > 0 ? `<tr><td colspan="3" class="text-right">Discount:</td><td class="text-right">-${format(totals.discountAmount)}</td></tr>` : ""}
      <tr><td colspan="3" class="text-right">Tax (${data.taxRate}%):</td><td class="text-right">${format(totals.tax)}</td></tr>
      <tr class="total-row"><td colspan="3" class="text-right">Total:</td><td class="text-right">${format(totals.total)}</td></tr>
    </tfoot>
  </table>
  ${data.paymentMethod ? `<div class="section"><p><strong>Payment Method:</strong> ${data.paymentMethod}</p></div>` : ""}
  ${data.bankDetails ? `<div class="section"><p><strong>Bank Details:</strong> ${data.bankDetails}</p></div>` : ""}
  ${data.notes ? `<div class="section"><p><strong>Notes:</strong> ${data.notes}</p></div>` : ""}
  ${data.terms ? `<div class="section"><p><strong>Terms:</strong> ${data.terms}</p></div>` : ""}
</body>
</html>`
  },
  {
    id: 2,
    name: "Modern",
    description: "Clean and contemporary design",
    generateHTML: (data, totals, format, logoUrl) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Invoice ${data.invoiceNumber}</title>
  <style>
    body { font-family: 'Helvetica Neue', Arial, sans-serif; margin: 40px; background: #f8f9fa; }
    .container { background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 2px solid #0F7C4F; }
    .logo-container { display: flex; align-items: center; }
    .logo { max-height: 60px; max-width: 200px; object-fit: contain; }
    .invoice-title { font-size: 32px; color: #0F7C4F; font-weight: 600; }
    .invoice-info { text-align: right; color: #666; }
    .section { margin: 25px 0; }
    table { width: 100%; border-collapse: collapse; margin: 25px 0; }
    th { background-color: #0F7C4F; color: #fff; padding: 15px; text-align: left; font-weight: 600; }
    td { padding: 12px 15px; border-bottom: 1px solid #e9ecef; }
    .total-row { font-weight: 600; background-color: #f8f9fa; font-size: 18px; }
    .text-right { text-align: right; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-container">
        ${logoUrl ? `<img src="${logoUrl}" alt="Logo" class="logo" />` : '<div class="invoice-title">INVOICE</div>'}
      </div>
      <div class="invoice-info">
        <p><strong>#${data.invoiceNumber}</strong></p>
        <p>Date: ${data.date}</p>
        ${data.dueDate ? `<p>Due: ${data.dueDate}</p>` : ""}
      </div>
    </div>
    <div class="section" style="display: flex; justify-content: space-between;">
      <div>
        <h3 style="color: #0F7C4F; margin-bottom: 10px;">Bill From</h3>
        <p>${data.from.name}<br>${data.from.address}<br>${data.from.city}, ${data.from.zip}<br>${data.from.country}<br>${data.from.email}<br>${data.from.phone}</p>
      </div>
      <div>
        <h3 style="color: #0F7C4F; margin-bottom: 10px;">Bill To</h3>
        <p>${data.to.name}<br>${data.to.address}<br>${data.to.city}, ${data.to.zip}<br>${data.to.country}<br>${data.to.email}</p>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th style="text-align: center;">Qty</th>
          <th style="text-align: right;">Unit Price</th>
          <th style="text-align: right;">Total</th>
        </tr>
      </thead>
      <tbody>
        ${data.items.map((item: any) => `
          <tr>
            <td>${item.description}</td>
            <td style="text-align: center;">${item.quantity}</td>
            <td style="text-align: right;">${format(item.unitPrice)}</td>
            <td style="text-align: right;">${format(item.quantity * item.unitPrice)}</td>
          </tr>
        `).join("")}
      </tbody>
      <tfoot>
        <tr><td colspan="3" class="text-right">Subtotal:</td><td class="text-right">${format(totals.subtotal)}</td></tr>
        ${totals.discountAmount > 0 ? `<tr><td colspan="3" class="text-right">Discount:</td><td class="text-right">-${format(totals.discountAmount)}</td></tr>` : ""}
        <tr><td colspan="3" class="text-right">Tax (${data.taxRate}%):</td><td class="text-right">${format(totals.tax)}</td></tr>
        <tr class="total-row"><td colspan="3" class="text-right">Total:</td><td class="text-right" style="color: #0F7C4F;">${format(totals.total)}</td></tr>
      </tfoot>
    </table>
    ${data.paymentMethod ? `<div class="section"><p><strong>Payment Method:</strong> ${data.paymentMethod}</p></div>` : ""}
    ${data.bankDetails ? `<div class="section"><p><strong>Bank Details:</strong> ${data.bankDetails}</p></div>` : ""}
    ${data.notes ? `<div class="section"><p><strong>Notes:</strong> ${data.notes}</p></div>` : ""}
    ${data.terms ? `<div class="section"><p><strong>Terms:</strong> ${data.terms}</p></div>` : ""}
  </div>
</body>
</html>`
  },
  {
    id: 3,
    name: "Minimal",
    description: "Simple and elegant",
    generateHTML: (data, totals, format, logoUrl) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Invoice ${data.invoiceNumber}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 60px auto; max-width: 800px; color: #2c3e50; }
    .header { text-align: center; margin-bottom: 50px; }
    .logo-container { display: flex; justify-content: center; margin-bottom: 10px; }
    .logo { max-height: 60px; max-width: 200px; object-fit: contain; }
    .invoice-title { font-size: 48px; font-weight: 300; letter-spacing: 4px; margin-bottom: 10px; }
    .invoice-number { font-size: 14px; color: #7f8c8d; }
    .section { margin: 30px 0; }
    table { width: 100%; border-collapse: collapse; margin: 30px 0; }
    th { padding: 15px 0; text-align: left; border-bottom: 2px solid #ecf0f1; font-weight: 500; }
    td { padding: 12px 0; border-bottom: 1px solid #ecf0f1; }
    .total-row { font-weight: 600; font-size: 20px; }
    .text-right { text-align: right; }
  </style>
</head>
<body>
  <div class="header">
    ${logoUrl ? `<div class="logo-container"><img src="${logoUrl}" alt="Logo" class="logo" /></div>` : '<div class="invoice-title">INVOICE</div>'}
    <div class="invoice-number">#${data.invoiceNumber} | ${data.date}</div>
  </div>
  <div class="section" style="display: flex; justify-content: space-between;">
    <div>
      <strong>${data.from.name}</strong><br>
      ${data.from.address}<br>
      ${data.from.city}, ${data.from.zip}<br>
      ${data.from.country}<br>
      ${data.from.email}<br>
      ${data.from.phone}
    </div>
    <div style="text-align: right;">
      <strong>${data.to.name}</strong><br>
      ${data.to.address}<br>
      ${data.to.city}, ${data.to.zip}<br>
      ${data.to.country}<br>
      ${data.to.email}
    </div>
  </div>
  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th style="text-align: center;">Qty</th>
        <th style="text-align: right;">Price</th>
        <th style="text-align: right;">Total</th>
      </tr>
    </thead>
    <tbody>
      ${data.items.map((item: any) => `
        <tr>
          <td style="color: #ffffff !important;">${item.description}</td>
          <td style="text-align: center; color: #ffffff !important;">${item.quantity}</td>
          <td style="text-align: right; color: #ffffff !important;">${format(item.unitPrice)}</td>
          <td style="text-align: right; color: #ffffff !important;">${format(item.quantity * item.unitPrice)}</td>
        </tr>
      `).join("")}
    </tbody>
    <tfoot>
      <tr><td colspan="3" class="text-right">Subtotal</td><td class="text-right">${format(totals.subtotal)}</td></tr>
      ${totals.discountAmount > 0 ? `<tr><td colspan="3" class="text-right">Discount</td><td class="text-right">-${format(totals.discountAmount)}</td></tr>` : ""}
      <tr><td colspan="3" class="text-right">Tax (${data.taxRate}%)</td><td class="text-right">${format(totals.tax)}</td></tr>
      <tr class="total-row"><td colspan="3" class="text-right">Total</td><td class="text-right">${format(totals.total)}</td></tr>
    </tfoot>
  </table>
  ${data.paymentMethod ? `<div class="section"><strong>Payment:</strong> ${data.paymentMethod}</div>` : ""}
  ${data.bankDetails ? `<div class="section"><strong>Bank:</strong> ${data.bankDetails}</div>` : ""}
  ${data.notes ? `<div class="section">${data.notes}</div>` : ""}
  ${data.terms ? `<div class="section" style="font-size: 12px; color: #7f8c8d;">${data.terms}</div>` : ""}
</body>
</html>`
  },
  {
    id: 4,
    name: "Bold",
    description: "Strong and impactful",
    generateHTML: (data, totals, format, logoUrl) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Invoice ${data.invoiceNumber}</title>
  <style>
    body { font-family: 'Arial Black', Arial, sans-serif; margin: 30px; background: #1a1a1a; color: #ffffff !important; }
    .container { background: #2d2d2d; padding: 40px; border: 4px solid #0F7C4F; color: #ffffff !important; }
    .header { border-bottom: 4px solid #0F7C4F; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center; color: #ffffff !important; }
    .logo-container { display: flex; align-items: center; }
    .logo { max-height: 60px; max-width: 200px; object-fit: contain; }
    .invoice-title { font-size: 42px; color: #0F7C4F; margin-bottom: 10px; }
    .section { margin: 25px 0; color: #ffffff !important; }
    table { width: 100%; border-collapse: collapse; margin: 25px 0; color: #ffffff !important; }
    th { background-color: #0F7C4F; color: #ffffff !important; padding: 15px; text-align: left; font-size: 16px; }
    td { padding: 12px 15px; border-bottom: 2px solid #444; color: #ffffff !important; }
    .total-row { background-color: #0F7C4F; font-size: 20px; color: #ffffff !important; }
    .text-right { text-align: right; color: #ffffff !important; }
    h3 { color: #ffffff !important; }
    p { color: #ffffff !important; }
    strong { color: #ffffff !important; }
    div { color: #ffffff !important; }
    span { color: #ffffff !important; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-container">
        ${logoUrl ? `<img src="${logoUrl}" alt="Logo" class="logo" />` : '<div class="invoice-title">INVOICE</div>'}
      </div>
      <div style="text-align: right; color: #ffffff !important;">
        <p style="color: #ffffff !important;"><strong style="color: #ffffff !important;">#${data.invoiceNumber}</strong></p>
        <p style="color: #ffffff !important;">Date: ${data.date}</p>
        ${data.dueDate ? `<p style="color: #ffffff !important;">Due: ${data.dueDate}</p>` : ""}
      </div>
    </div>
    <div class="section" style="display: flex; justify-content: space-between;">
      <div>
        <h3 style="color: #0F7C4F;">FROM</h3>
        <p style="color: #ffffff !important;">${data.from.name}<br>${data.from.address}<br>${data.from.city}, ${data.from.zip}<br>${data.from.country}<br>${data.from.email}<br>${data.from.phone}</p>
      </div>
      <div>
        <h3 style="color: #0F7C4F;">TO</h3>
        <p style="color: #ffffff !important;">${data.to.name}<br>${data.to.address}<br>${data.to.city}, ${data.to.zip}<br>${data.to.country}<br>${data.to.email}</p>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>ITEM</th>
          <th style="text-align: center;">QTY</th>
          <th style="text-align: right;">PRICE</th>
          <th style="text-align: right;">TOTAL</th>
        </tr>
      </thead>
      <tbody>
        ${data.items.map((item: any) => `
          <tr>
            <td style="color: #ffffff !important;">${item.description}</td>
            <td style="text-align: center; color: #ffffff !important;">${item.quantity}</td>
            <td style="text-align: right; color: #ffffff !important;">${format(item.unitPrice)}</td>
            <td style="text-align: right; color: #ffffff !important;">${format(item.quantity * item.unitPrice)}</td>
          </tr>
        `).join("")}
      </tbody>
      <tfoot>
        <tr><td colspan="3" class="text-right" style="color: #ffffff !important;">SUBTOTAL</td><td class="text-right" style="color: #ffffff !important;">${format(totals.subtotal)}</td></tr>
        ${totals.discountAmount > 0 ? `<tr><td colspan="3" class="text-right" style="color: #ffffff !important;">DISCOUNT</td><td class="text-right" style="color: #ffffff !important;">-${format(totals.discountAmount)}</td></tr>` : ""}
        <tr><td colspan="3" class="text-right" style="color: #ffffff !important;">TAX (${data.taxRate}%)</td><td class="text-right" style="color: #ffffff !important;">${format(totals.tax)}</td></tr>
        <tr class="total-row"><td colspan="3" class="text-right" style="color: #ffffff !important;">TOTAL</td><td class="text-right" style="color: #ffffff !important;">${format(totals.total)}</td></tr>
      </tfoot>
    </table>
    ${data.paymentMethod ? `<div class="section" style="color: #ffffff !important;"><strong style="color: #ffffff !important;">PAYMENT:</strong> ${data.paymentMethod}</div>` : ""}
    ${data.bankDetails ? `<div class="section" style="color: #ffffff !important;"><strong style="color: #ffffff !important;">BANK:</strong> ${data.bankDetails}</div>` : ""}
    ${data.notes ? `<div class="section" style="color: #ffffff !important;"><strong style="color: #ffffff !important;">NOTES:</strong> ${data.notes}</div>` : ""}
    ${data.terms ? `<div class="section" style="color: #ffffff !important;"><strong style="color: #ffffff !important;">TERMS:</strong> ${data.terms}</div>` : ""}
  </div>
</body>
</html>`
  },
  {
    id: 5,
    name: "Elegant",
    description: "Sophisticated and refined",
    generateHTML: (data, totals, format, logoUrl) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Invoice ${data.invoiceNumber}</title>
  <style>
    body { font-family: 'Georgia', serif; margin: 50px; background: #fafafa; }
    .container { background: white; padding: 50px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
    .header { border-left: 5px solid #8b7355; padding-left: 20px; margin-bottom: 40px; display: flex; justify-content: space-between; align-items: center; }
    .logo-container { display: flex; align-items: center; }
    .logo { max-height: 60px; max-width: 200px; object-fit: contain; }
    .invoice-title { font-size: 38px; color: #8b7355; font-style: italic; }
    .section { margin: 30px 0; }
    table { width: 100%; border-collapse: collapse; margin: 30px 0; }
    th { background-color: #8b7355; color: #fff; padding: 12px; text-align: left; font-weight: normal; }
    td { padding: 10px 12px; border-bottom: 1px solid #e8e8e8; }
    .total-row { font-weight: bold; background-color: #f5f5f5; }
    .text-right { text-align: right; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-container">
        ${logoUrl ? `<img src="${logoUrl}" alt="Logo" class="logo" />` : '<div class="invoice-title">Invoice</div>'}
      </div>
      <p style="color: #666; margin-top: 5px;">Invoice #${data.invoiceNumber} | ${data.date}</p>
    </div>
    <div class="section" style="display: flex; justify-content: space-between;">
      <div>
        <h3 style="color: #8b7355; margin-bottom: 10px;">From</h3>
        <p>${data.from.name}<br>${data.from.address}<br>${data.from.city}, ${data.from.zip}<br>${data.from.country}<br>${data.from.email}<br>${data.from.phone}</p>
      </div>
      <div>
        <h3 style="color: #8b7355; margin-bottom: 10px;">To</h3>
        <p>${data.to.name}<br>${data.to.address}<br>${data.to.city}, ${data.to.zip}<br>${data.to.country}<br>${data.to.email}</p>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th style="text-align: center;">Quantity</th>
          <th style="text-align: right;">Price</th>
          <th style="text-align: right;">Amount</th>
        </tr>
      </thead>
      <tbody>
        ${data.items.map((item: any) => `
          <tr>
            <td>${item.description}</td>
            <td style="text-align: center;">${item.quantity}</td>
            <td style="text-align: right;">${format(item.unitPrice)}</td>
            <td style="text-align: right;">${format(item.quantity * item.unitPrice)}</td>
          </tr>
        `).join("")}
      </tbody>
      <tfoot>
        <tr><td colspan="3" class="text-right">Subtotal</td><td class="text-right">${format(totals.subtotal)}</td></tr>
        ${totals.discountAmount > 0 ? `<tr><td colspan="3" class="text-right">Discount</td><td class="text-right">-${format(totals.discountAmount)}</td></tr>` : ""}
        <tr><td colspan="3" class="text-right">Tax (${data.taxRate}%)</td><td class="text-right">${format(totals.tax)}</td></tr>
        <tr class="total-row"><td colspan="3" class="text-right">Total</td><td class="text-right">${format(totals.total)}</td></tr>
      </tfoot>
    </table>
    ${data.paymentMethod ? `<div class="section"><strong>Payment Method:</strong> ${data.paymentMethod}</div>` : ""}
    ${data.bankDetails ? `<div class="section"><strong>Bank Details:</strong> ${data.bankDetails}</div>` : ""}
    ${data.notes ? `<div class="section"><em>${data.notes}</em></div>` : ""}
    ${data.terms ? `<div class="section" style="font-size: 12px; color: #666;">${data.terms}</div>` : ""}
  </div>
</body>
</html>`
  },
  {
    id: 6,
    name: "Colorful",
    description: "Vibrant and eye-catching",
    generateHTML: (data, totals, format, logoUrl) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Invoice ${data.invoiceNumber}</title>
  <style>
    body { font-family: 'Verdana', sans-serif; margin: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
    .container { background: white; padding: 40px; border-radius: 10px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center; }
    .logo-container { display: flex; align-items: center; }
    .logo { max-height: 60px; max-width: 200px; object-fit: contain; background: white; padding: 5px; border-radius: 4px; }
    .invoice-title { font-size: 40px; margin-bottom: 10px; }
    .section { margin: 25px 0; }
    table { width: 100%; border-collapse: collapse; margin: 25px 0; }
    th { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px; text-align: left; }
    td { padding: 12px 15px; border-bottom: 1px solid #e0e0e0; }
    .total-row { background: #f0f0f0; font-weight: bold; font-size: 18px; }
    .text-right { text-align: right; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-container">
        ${logoUrl ? `<img src="${logoUrl}" alt="Logo" class="logo" />` : '<div class="invoice-title">INVOICE</div>'}
      </div>
      <p>#${data.invoiceNumber} | ${data.date}</p>
    </div>
    <div class="section" style="display: flex; justify-content: space-between;">
      <div>
        <h3 style="color: #667eea;">From</h3>
        <p>${data.from.name}<br>${data.from.address}<br>${data.from.city}, ${data.from.zip}<br>${data.from.country}<br>${data.from.email}<br>${data.from.phone}</p>
      </div>
      <div>
        <h3 style="color: #667eea;">To</h3>
        <p>${data.to.name}<br>${data.to.address}<br>${data.to.city}, ${data.to.zip}<br>${data.to.country}<br>${data.to.email}</p>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th style="text-align: center;">Qty</th>
          <th style="text-align: right;">Price</th>
          <th style="text-align: right;">Total</th>
        </tr>
      </thead>
      <tbody>
        ${data.items.map((item: any) => `
          <tr>
            <td>${item.description}</td>
            <td style="text-align: center;">${item.quantity}</td>
            <td style="text-align: right;">${format(item.unitPrice)}</td>
            <td style="text-align: right;">${format(item.quantity * item.unitPrice)}</td>
          </tr>
        `).join("")}
      </tbody>
      <tfoot>
        <tr><td colspan="3" class="text-right">Subtotal</td><td class="text-right">${format(totals.subtotal)}</td></tr>
        ${totals.discountAmount > 0 ? `<tr><td colspan="3" class="text-right">Discount</td><td class="text-right">-${format(totals.discountAmount)}</td></tr>` : ""}
        <tr><td colspan="3" class="text-right">Tax (${data.taxRate}%)</td><td class="text-right">${format(totals.tax)}</td></tr>
        <tr class="total-row"><td colspan="3" class="text-right">Total</td><td class="text-right" style="color: #667eea;">${format(totals.total)}</td></tr>
      </tfoot>
    </table>
    ${data.paymentMethod ? `<div class="section"><strong>Payment:</strong> ${data.paymentMethod}</div>` : ""}
    ${data.bankDetails ? `<div class="section"><strong>Bank:</strong> ${data.bankDetails}</div>` : ""}
    ${data.notes ? `<div class="section">${data.notes}</div>` : ""}
    ${data.terms ? `<div class="section" style="font-size: 12px; color: #666;">${data.terms}</div>` : ""}
  </div>
</body>
</html>`
  },
  {
    id: 7,
    name: "Corporate",
    description: "Professional business style",
    generateHTML: (data, totals, format, logoUrl) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Invoice ${data.invoiceNumber}</title>
  <style>
    body { font-family: 'Arial', sans-serif; margin: 40px; }
    .header { border-top: 5px solid #2c3e50; padding-top: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center; }
    .logo-container { display: flex; align-items: center; }
    .logo { max-height: 60px; max-width: 200px; object-fit: contain; }
    .invoice-title { font-size: 28px; color: #2c3e50; font-weight: bold; }
    .section { margin: 20px 0; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid #ddd; }
    th { background-color: #34495e; color: white; padding: 12px; text-align: left; }
    td { padding: 10px; border: 1px solid #ddd; }
    .total-row { background-color: #ecf0f1; font-weight: bold; }
    .text-right { text-align: right; }
  </style>
</head>
<body>
    <div class="header">
      <div class="logo-container">
        ${logoUrl ? `<img src="${logoUrl}" alt="Logo" class="logo" />` : '<div class="invoice-title">TAX INVOICE</div>'}
      </div>
      <div style="text-align: right; margin-top: 10px;">
        <p><strong>Invoice No:</strong> ${data.invoiceNumber}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        ${data.dueDate ? `<p><strong>Due Date:</strong> ${data.dueDate}</p>` : ""}
      </div>
    </div>
  <div class="section" style="display: flex; justify-content: space-between;">
    <div>
      <h3 style="color: #2c3e50;">Supplier Details</h3>
      <p>${data.from.name}<br>${data.from.address}<br>${data.from.city}, ${data.from.zip}<br>${data.from.country}<br>${data.from.email}<br>${data.from.phone}</p>
    </div>
    <div>
      <h3 style="color: #2c3e50;">Customer Details</h3>
      <p>${data.to.name}<br>${data.to.address}<br>${data.to.city}, ${data.to.zip}<br>${data.to.country}<br>${data.to.email}</p>
    </div>
  </div>
  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th style="text-align: center;">Quantity</th>
        <th style="text-align: right;">Unit Price</th>
        <th style="text-align: right;">Amount</th>
      </tr>
    </thead>
    <tbody>
      ${data.items.map((item: any) => `
        <tr>
          <td style="color: #ffffff !important;">${item.description}</td>
          <td style="text-align: center; color: #ffffff !important;">${item.quantity}</td>
          <td style="text-align: right; color: #ffffff !important;">${format(item.unitPrice)}</td>
          <td style="text-align: right; color: #ffffff !important;">${format(item.quantity * item.unitPrice)}</td>
        </tr>
      `).join("")}
    </tbody>
    <tfoot>
      <tr><td colspan="3" class="text-right">Subtotal</td><td class="text-right">${format(totals.subtotal)}</td></tr>
      ${totals.discountAmount > 0 ? `<tr><td colspan="3" class="text-right">Discount</td><td class="text-right">-${format(totals.discountAmount)}</td></tr>` : ""}
      <tr><td colspan="3" class="text-right">Tax (${data.taxRate}%)</td><td class="text-right">${format(totals.tax)}</td></tr>
      <tr class="total-row"><td colspan="3" class="text-right">Total Amount</td><td class="text-right">${format(totals.total)}</td></tr>
    </tfoot>
  </table>
  ${data.paymentMethod ? `<div class="section"><strong>Payment Method:</strong> ${data.paymentMethod}</div>` : ""}
  ${data.bankDetails ? `<div class="section"><strong>Bank Details:</strong> ${data.bankDetails}</div>` : ""}
  ${data.notes ? `<div class="section"><strong>Notes:</strong> ${data.notes}</div>` : ""}
  ${data.terms ? `<div class="section"><strong>Terms & Conditions:</strong> ${data.terms}</div>` : ""}
</body>
</html>`
  },
  {
    id: 8,
    name: "Creative",
    description: "Artistic and unique",
    generateHTML: (data, totals, format, logoUrl) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Invoice ${data.invoiceNumber}</title>
  <style>
    body { font-family: 'Comic Sans MS', cursive; margin: 40px; background: #fff5e6; }
    .container { background: white; padding: 40px; border: 3px dashed #ff6b6b; border-radius: 20px; }
    .header { text-align: center; margin-bottom: 30px; }
    .logo-container { display: flex; justify-content: center; margin-bottom: 10px; }
    .logo { max-height: 60px; max-width: 200px; object-fit: contain; }
    .invoice-title { font-size: 36px; color: #ff6b6b; margin-bottom: 10px; }
    .section { margin: 25px 0; }
    table { width: 100%; border-collapse: collapse; margin: 25px 0; }
    th { background-color: #ff6b6b; color: white; padding: 12px; text-align: left; }
    td { padding: 10px 12px; border-bottom: 2px dotted #ff6b6b; }
    .total-row { background-color: #ffe0e0; font-weight: bold; }
    .text-right { text-align: right; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${logoUrl ? `<div class="logo-container"><img src="${logoUrl}" alt="Logo" class="logo" /></div>` : '<div class="invoice-title">INVOICE</div>'}
      <p>#${data.invoiceNumber} | ${data.date}</p>
    </div>
    <div class="section" style="display: flex; justify-content: space-between;">
      <div>
        <h3 style="color: #ff6b6b;">From 🏢</h3>
        <p>${data.from.name}<br>${data.from.address}<br>${data.from.city}, ${data.from.zip}<br>${data.from.country}<br>${data.from.email}<br>${data.from.phone}</p>
      </div>
      <div>
        <h3 style="color: #ff6b6b;">To 👤</h3>
        <p>${data.to.name}<br>${data.to.address}<br>${data.to.city}, ${data.to.zip}<br>${data.to.country}<br>${data.to.email}</p>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th style="text-align: center;">Qty</th>
          <th style="text-align: right;">Price</th>
          <th style="text-align: right;">Total</th>
        </tr>
      </thead>
      <tbody>
        ${data.items.map((item: any) => `
          <tr>
            <td>${item.description}</td>
            <td style="text-align: center;">${item.quantity}</td>
            <td style="text-align: right;">${format(item.unitPrice)}</td>
            <td style="text-align: right;">${format(item.quantity * item.unitPrice)}</td>
          </tr>
        `).join("")}
      </tbody>
      <tfoot>
        <tr><td colspan="3" class="text-right">Subtotal</td><td class="text-right">${format(totals.subtotal)}</td></tr>
        ${totals.discountAmount > 0 ? `<tr><td colspan="3" class="text-right">Discount</td><td class="text-right">-${format(totals.discountAmount)}</td></tr>` : ""}
        <tr><td colspan="3" class="text-right">Tax (${data.taxRate}%)</td><td class="text-right">${format(totals.tax)}</td></tr>
        <tr class="total-row"><td colspan="3" class="text-right">Total</td><td class="text-right" style="color: #ff6b6b; font-size: 20px;">${format(totals.total)}</td></tr>
      </tfoot>
    </table>
    ${data.paymentMethod ? `<div class="section"><strong>Payment:</strong> ${data.paymentMethod}</div>` : ""}
    ${data.bankDetails ? `<div class="section"><strong>Bank:</strong> ${data.bankDetails}</div>` : ""}
    ${data.notes ? `<div class="section">💬 ${data.notes}</div>` : ""}
    ${data.terms ? `<div class="section" style="font-size: 12px;">${data.terms}</div>` : ""}
  </div>
</body>
</html>`
  },
  {
    id: 9,
    name: "Tech",
    description: "Modern tech company style",
    generateHTML: (data, totals, format, logoUrl) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Invoice ${data.invoiceNumber}</title>
  <style>
    body { font-family: 'Courier New', monospace; margin: 40px; background: #0a0a0a; color: #ffffff !important; }
    .container { background: #1a1a1a; padding: 40px; border: 2px solid #00ff00; color: #ffffff !important; }
    .header { border-bottom: 2px solid #00ff00; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center; color: #ffffff !important; }
    .logo-container { display: flex; align-items: center; }
    .logo { max-height: 60px; max-width: 200px; object-fit: contain; }
    .invoice-title { font-size: 32px; color: #ffffff !important; font-weight: bold; }
    .section { margin: 25px 0; color: #ffffff !important; }
    table { width: 100%; border-collapse: collapse; margin: 25px 0; border: 1px solid #00ff00; color: #ffffff !important; }
    th { background-color: #003300; color: #ffffff !important; padding: 12px; text-align: left; border: 1px solid #00ff00; }
    td { padding: 10px 12px; border: 1px solid #00ff00; color: #ffffff !important; }
    .total-row { background-color: #002200; font-weight: bold; color: #ffffff !important; }
    .text-right { text-align: right; color: #ffffff !important; }
    h3 { color: #ffffff !important; }
    p { color: #ffffff !important; }
    strong { color: #ffffff !important; }
    div { color: #ffffff !important; }
    span { color: #ffffff !important; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-container">
        ${logoUrl ? `<img src="${logoUrl}" alt="Logo" class="logo" />` : '<div class="invoice-title">> INVOICE.exe</div>'}
      </div>
      <div style="text-align: right; color: #ffffff !important;">
        <p style="color: #ffffff !important;">#${data.invoiceNumber}</p>
        <p style="color: #ffffff !important;">DATE: ${data.date}</p>
        ${data.dueDate ? `<p style="color: #ffffff !important;">DUE: ${data.dueDate}</p>` : ""}
      </div>
    </div>
    <div class="section" style="display: flex; justify-content: space-between;">
      <div>
        <h3 style="color: #ffffff !important;">> FROM</h3>
        <p style="color: #ffffff !important;">${data.from.name}<br>${data.from.address}<br>${data.from.city}, ${data.from.zip}<br>${data.from.country}<br>${data.from.email}<br>${data.from.phone}</p>
      </div>
      <div>
        <h3 style="color: #ffffff !important;">> TO</h3>
        <p style="color: #ffffff !important;">${data.to.name}<br>${data.to.address}<br>${data.to.city}, ${data.to.zip}<br>${data.to.country}<br>${data.to.email}</p>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>ITEM</th>
          <th style="text-align: center;">QTY</th>
          <th style="text-align: right;">PRICE</th>
          <th style="text-align: right;">TOTAL</th>
        </tr>
      </thead>
      <tbody>
        ${data.items.map((item: any) => `
          <tr>
            <td style="color: #ffffff !important;">${item.description}</td>
            <td style="text-align: center; color: #ffffff !important;">${item.quantity}</td>
            <td style="text-align: right; color: #ffffff !important;">${format(item.unitPrice)}</td>
            <td style="text-align: right; color: #ffffff !important;">${format(item.quantity * item.unitPrice)}</td>
          </tr>
        `).join("")}
      </tbody>
      <tfoot>
        <tr><td colspan="3" class="text-right" style="color: #ffffff !important;">SUBTOTAL</td><td class="text-right" style="color: #ffffff !important;">${format(totals.subtotal)}</td></tr>
        ${totals.discountAmount > 0 ? `<tr><td colspan="3" class="text-right" style="color: #ffffff !important;">DISCOUNT</td><td class="text-right" style="color: #ffffff !important;">-${format(totals.discountAmount)}</td></tr>` : ""}
        <tr><td colspan="3" class="text-right" style="color: #ffffff !important;">TAX (${data.taxRate}%)</td><td class="text-right" style="color: #ffffff !important;">${format(totals.tax)}</td></tr>
        <tr class="total-row"><td colspan="3" class="text-right" style="color: #ffffff !important;">TOTAL</td><td class="text-right" style="color: #ffffff !important;">${format(totals.total)}</td></tr>
      </tfoot>
    </table>
    ${data.paymentMethod ? `<div class="section" style="color: #ffffff !important;">> PAYMENT: ${data.paymentMethod}</div>` : ""}
    ${data.bankDetails ? `<div class="section" style="color: #ffffff !important;">> BANK: ${data.bankDetails}</div>` : ""}
    ${data.notes ? `<div class="section" style="color: #ffffff !important;">> NOTES: ${data.notes}</div>` : ""}
    ${data.terms ? `<div class="section" style="font-size: 12px; color: #ffffff !important;">> TERMS: ${data.terms}</div>` : ""}
  </div>
</body>
</html>`
  },
  {
    id: 10,
    name: "Premium",
    description: "Luxury and high-end",
    generateHTML: (data, totals, format, logoUrl) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Invoice ${data.invoiceNumber}</title>
  <style>
    body { font-family: 'Garamond', serif; margin: 50px; background: #f5f5f0; }
    .container { background: white; padding: 60px; box-shadow: 0 8px 30px rgba(0,0,0,0.12); border: 1px solid #d4af37; }
    .header { text-align: center; border-bottom: 2px solid #d4af37; padding-bottom: 30px; margin-bottom: 40px; }
    .logo-container { display: flex; justify-content: center; margin-bottom: 10px; }
    .logo { max-height: 60px; max-width: 200px; object-fit: contain; }
    .invoice-title { font-size: 48px; color: #d4af37; font-weight: normal; letter-spacing: 8px; margin-bottom: 10px; }
    .invoice-number { font-size: 14px; color: #888; letter-spacing: 2px; }
    .section { margin: 35px 0; }
    table { width: 100%; border-collapse: collapse; margin: 35px 0; }
    th { background-color: #d4af37; color: white; padding: 15px; text-align: left; font-weight: normal; letter-spacing: 1px; }
    td { padding: 12px 15px; border-bottom: 1px solid #e8e8e8; }
    .total-row { background-color: #fafafa; font-weight: bold; font-size: 18px; }
    .text-right { text-align: right; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${logoUrl ? `<div class="logo-container"><img src="${logoUrl}" alt="Logo" class="logo" /></div>` : '<div class="invoice-title">INVOICE</div>'}
      <div class="invoice-number">${data.invoiceNumber} | ${data.date}</div>
    </div>
    <div class="section" style="display: flex; justify-content: space-between;">
      <div>
        <h3 style="color: #d4af37; margin-bottom: 15px; font-weight: normal; letter-spacing: 2px;">FROM</h3>
        <p style="line-height: 1.8;">${data.from.name}<br>${data.from.address}<br>${data.from.city}, ${data.from.zip}<br>${data.from.country}<br>${data.from.email}<br>${data.from.phone}</p>
      </div>
      <div>
        <h3 style="color: #d4af37; margin-bottom: 15px; font-weight: normal; letter-spacing: 2px;">TO</h3>
        <p style="line-height: 1.8;">${data.to.name}<br>${data.to.address}<br>${data.to.city}, ${data.to.zip}<br>${data.to.country}<br>${data.to.email}</p>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th style="text-align: center;">Quantity</th>
          <th style="text-align: right;">Unit Price</th>
          <th style="text-align: right;">Amount</th>
        </tr>
      </thead>
      <tbody>
        ${data.items.map((item: any) => `
          <tr>
            <td>${item.description}</td>
            <td style="text-align: center;">${item.quantity}</td>
            <td style="text-align: right;">${format(item.unitPrice)}</td>
            <td style="text-align: right;">${format(item.quantity * item.unitPrice)}</td>
          </tr>
        `).join("")}
      </tbody>
      <tfoot>
        <tr><td colspan="3" class="text-right">Subtotal</td><td class="text-right">${format(totals.subtotal)}</td></tr>
        ${totals.discountAmount > 0 ? `<tr><td colspan="3" class="text-right">Discount</td><td class="text-right">-${format(totals.discountAmount)}</td></tr>` : ""}
        <tr><td colspan="3" class="text-right">Tax (${data.taxRate}%)</td><td class="text-right">${format(totals.tax)}</td></tr>
        <tr class="total-row"><td colspan="3" class="text-right">Total</td><td class="text-right" style="color: #d4af37;">${format(totals.total)}</td></tr>
      </tfoot>
    </table>
    ${data.paymentMethod ? `<div class="section"><strong style="color: #d4af37;">Payment Method:</strong> ${data.paymentMethod}</div>` : ""}
    ${data.bankDetails ? `<div class="section"><strong style="color: #d4af37;">Bank Details:</strong> ${data.bankDetails}</div>` : ""}
    ${data.notes ? `<div class="section" style="font-style: italic;">${data.notes}</div>` : ""}
    ${data.terms ? `<div class="section" style="font-size: 11px; color: #888; line-height: 1.6;">${data.terms}</div>` : ""}
  </div>
</body>
</html>`
  }
];

