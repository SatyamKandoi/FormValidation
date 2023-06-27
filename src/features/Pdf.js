import React from 'react';
import { PDFDownloadLink, Page, Text, Document } from '@react-pdf/renderer';

const Pdf = ({ data }) => (
    <Document>
      <Page>
        <Text>{data.title}</Text>
        <Text>{data.description}</Text>
        {/* Add more content as needed */}
      </Page>
    </Document>
  );