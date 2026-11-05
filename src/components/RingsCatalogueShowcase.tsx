import React, { useState, useMemo } from 'react';
import { Search, MessageCircle, Eye, SlidersHorizontal, Scale, Check, Sparkles } from 'lucide-react';
import { RingProduct } from '../types';
import { RINGS_DATA, formatInr, getRingWhatsAppLink } from '../data/jewelleryData';

interface RingsCatalogueShowcaseProps {
  onSelectRing: (ring: RingProduct) => void;
}

export const RingsCatalogueShowcase: React.FC<RingsCatalogueShowcaseProps> = ({ onSelectRing }) => {
  const [filterPurity, setFilterPurity] = useState<'All' | '22 KT' | '18 KT' | 'Rose Gold' | 'Diamond'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'weight-asc' | 'weight-desc'>('default');

  const filteredRings = useMemo(() => {
    return RINGS_DATA.filter((ring) => {
      // Purity filter
      let matchesFilter = true;
      if (filterPurity === '22 KT') matchesFilter = ring.purity === '22 KT';
      else if (filterPurity === '18 KT') matchesFilter = ring.purity === '18 KT';
      else if (filterPurity === 'Rose Gold') matchesFilter = ring.goldType === 'Rose Gold';
      else if (filterPurity === 'Diamond') matchesFilter = ring.ringType === 'Diamond Ring' || ring.goldType === 'Diamond Gold';

      // Search filter (name, tagLabel, weight, price)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        ring.tagLabel.toLowerCase().includes(q) ||
        ring.name.toLowerCase().includes(q) ||
        ring.ringType.toLowerCase().includes(q) ||
        ring.weightGrams.toString().includes(q) ||
        ring.priceInr.toString().includes(q);

      return matchesFilter && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceInr - b.priceInr;
      if (sortBy === 'price-desc') return b.priceInr - a.priceInr;
      if (sortBy === 'weight-asc') return a.weightGrams - b.weightGrams;
      if (sortBy === 'weight-desc') return b.weightGrams - a.weightGrams;
      return 0;
    });
  }, [filterPurity, searchQuery, sortBy]);

  return (
    <section id="rings-catalogue" className="py-14 sm:py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C7335] font-semibold block mb-2">
            Surti Jewels Official Catalogue
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B1E38] font-normal leading-tight">
            The 25 Signature Ladies Rings
          </h2>
          <div className="w-14 h-[1.5px] bg-[#D4AF37] mx-auto my-3" />
          <p className="text-xs sm:text-base text-[#242124]/80 leading-relaxed font-normal">
            Real catalog rings in 22KT & 18KT gold with certified gross weights and exact prices. Browse all 25 models below and enquire directly with our workshop via WhatsApp.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-xl border border-[#EDE1BE] p-4 sm:p-5 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#8C7335] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by Tag (e.g. JP00030634), purity, or style..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#F8F4E9]/50 border border-[#EDE1BE] rounded-md text-[#242124] placeholder-[#8A858B] focus:outline-none focus:border-[#0B1E38]"
              />
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 self-end md:self-auto">
              <SlidersHorizontal className="w-4 h-4 text-[#8C7335]" />
              <label htmlFor="sort-select" className="text-xs text-[#6A656B] whitespace-nowrap">
                Sort:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs bg-[#F8F4E9]/50 border border-[#EDE1BE] rounded-md px-3 py-2 text-[#0B1E38] font-medium focus:outline-none focus:border-[#0B1E38]"
              >
                <option value="default">Catalogue Order</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="weight-asc">Weight: Low to High</option>
                <option value="weight-desc">Weight: High to Low</option>
              </select>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-[#EDE1BE]/60 scrollbar-none">
            {(['All', '22 KT', '18 KT', 'Rose Gold', 'Diamond'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilterPurity(tab)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  filterPurity === tab
                    ? 'bg-[#0B1E38] text-white shadow-xs'
                    : 'text-[#242124]/75 bg-[#F8F4E9] hover:bg-[#EDE1BE]/70 hover:text-[#0B1E38]'
                }`}
              >
                {tab === 'All' ? 'All 25 Rings' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between text-xs text-[#6A656B] mb-6">
          <span>
            Showing <strong className="text-[#0B1E38]">{filteredRings.length}</strong> of <strong>25</strong> rings
          </span>
          <span className="text-[11px] text-[#8C7335] font-medium">
            Exact Weights & Prices from Official Catalog
          </span>
        </div>

        {/* 25 Rings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredRings.map((ring) => {
            const waLink = getRingWhatsAppLink(ring);

            return (
              <div
                key={ring.id}
                className="group bg-white rounded-xl border border-[#EDE1BE] overflow-hidden shadow-xs hover:shadow-md hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Ring Image Frame */}
                <div
                  onClick={() => onSelectRing(ring)}
                  className="aspect-square w-full overflow-hidden bg-black relative cursor-pointer flex items-center justify-center p-2"
                >
                  <img
                    src={ring.image}
                    alt={ring.name}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Tag label badge on top */}
                  <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-mono text-[#FFDF73] border border-[#D4AF37]/50 shadow-xs">
                    {ring.tagLabel}
                  </div>

                  {/* Purity badge */}
                  <div className="absolute top-2.5 right-2.5 bg-[#0B1E38]/90 text-white px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider">
                    {ring.purity}
                  </div>

                  {/* Quick view hover button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-md bg-white text-[#0B1E38] text-xs font-semibold tracking-wide uppercase shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      View Details
                    </span>
                  </div>
                </div>

                {/* Details & Specs */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-[#FDFBF7]">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#8C7335] mb-1">
                      {ring.goldType} · {ring.ringType}
                    </div>

                    <h3
                      onClick={() => onSelectRing(ring)}
                      className="font-serif text-lg text-[#0B1E38] group-hover:text-[#8C7335] transition-colors cursor-pointer font-semibold line-clamp-1 leading-snug"
                    >
                      {ring.name}
                    </h3>

                    {/* Weight and Price Bar */}
                    <div className="mt-3 pt-3 border-t border-[#EDE1BE]/70 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-[#242124]">
                        <Scale className="w-3.5 h-3.5 text-[#8C7335]" />
                        <span className="font-medium">{ring.weightGrams} g</span>
                      </div>
                      <div className="font-serif text-xl font-bold text-[#0B1E38]">
                        {formatInr(ring.priceInr)}
                      </div>
                    </div>
                  </div>

                  {/* Actions: Details & WhatsApp Enquiry */}
                  <div className="pt-3.5 mt-3.5 border-t border-[#EDE1BE]/60 flex items-center gap-2">
                    <button
                      onClick={() => onSelectRing(ring)}
                      className="flex-1 py-2 px-2 text-xs font-semibold text-[#0B1E38] bg-[#F8F4E9] hover:bg-[#EDE1BE]/60 border border-[#EDE1BE] rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#0B1E38]" />
                      Details
                    </button>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-2 text-xs font-semibold text-white bg-[#0B1E38] hover:bg-[#071322] rounded-md transition-colors flex items-center justify-center gap-1 shadow-xs"
                      title="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" fill="currentColor" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
