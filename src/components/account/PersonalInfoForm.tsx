import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface PersonalInfoFormProps {
  data: {
    firstName: string;
    lastName: string;
    dob: string;
    phone: string;
    gender: string;
    languages: string;
    occupation: string;
    about: string;
  };
  onChange: (field: string, value: string) => void;
}

export function PersonalInfoForm({ data, onChange }: PersonalInfoFormProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-4 border-b border-slate-100">
        <CardTitle className="text-lg font-semibold text-slate-900">Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="grid gap-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={data.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
          />
        </div>

        {/* Last Name */}
        <div className="grid gap-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={data.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
          />
        </div>

        {/* Date of Birth */}
        <div className="grid gap-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            id="dob"
            type="date"
            value={data.dob}
            onChange={(e) => onChange('dob', e.target.value)}
          />
        </div>

        {/* Phone Number */}
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Gender */}
        <div className="grid gap-2">
          <Label htmlFor="gender">Gender</Label>
          <Select value={data.gender} onValueChange={(value) => onChange('gender', value)}>
            <SelectTrigger id="gender">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="non-binary">Non-binary</SelectItem>
              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Languages */}
        <div className="grid gap-2">
          <Label htmlFor="languages">Languages</Label>
          <Select value={data.languages} onValueChange={(value) => onChange('languages', value)}>
            <SelectTrigger id="languages">
              <SelectValue placeholder="Select languages" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="spanish">Spanish</SelectItem>
              <SelectItem value="french">French</SelectItem>
              <SelectItem value="mandarin">Mandarin</SelectItem>
              <SelectItem value="german">German</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Occupation */}
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="occupation">Occupation</Label>
          <Input
            id="occupation"
            value={data.occupation}
            onChange={(e) => onChange('occupation', e.target.value)}
            placeholder="e.g. Senior Geologist"
          />
        </div>

        {/* About Me */}
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="about">About Me</Label>
          <Textarea
            id="about"
            value={data.about}
            onChange={(e) => onChange('about', e.target.value)}
            placeholder="Tell us a bit about yourself..."
            className="min-h-[100px]"
          />
        </div>
      </CardContent>
    </Card>
  );
}
