import React from 'react';
import { Shield, RefreshCw } from 'lucide-react';

export const SecurityInformation: React.FC = () => {
  return (
    <div className="bg-white/40 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <Shield className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Compra protegida</h4>
            <p className="text-xs text-gray-600">Datos seguros con SSL</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <RefreshCw className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Cambios y devoluciones</h4>
            <p className="text-xs text-gray-600">Hasta 30 días sin costo</p>
          </div>
        </div>
      </div>
    </div>
  );
};
